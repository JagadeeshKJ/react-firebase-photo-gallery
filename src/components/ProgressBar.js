import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    console.log(progress, url);

    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url, setFile]);
    //when a file gets uploaded url gets changed
    //therefore to remove the full progress bar

  return (
    <motion.div 
      className='progress-bar'
      initial = {{ width: 0 }}
      animate = {{ width: progress + '%' }}
    > 
    </motion.div>
  )
}

export default ProgressBar;