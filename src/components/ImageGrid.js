import { motion } from 'framer-motion';
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  const unique = [...new Map(docs.map((m) => [m.url, m])).values()];

  // console.log(unique);

  return (
    <div className='img-grid'>
      { 
        unique && unique.map(doc => (
          <motion.div 
            className='img-wrap' 
            key = {doc.id} 
            onClick = {() => setSelectedImg(doc.url)}
            whileHover = {{ opacity: 1 }}
            layout
          >
            <motion.img 
              src={doc.url} 
              alt="uploaded-img" 
              initial = {{ opacity: 0 }}
              animate = {{ opacity: 1 }}
              transition = {{ delay: 1 }}
            />
          </motion.div>
        )) 
      }
    </div>
  )
}

export default ImageGrid