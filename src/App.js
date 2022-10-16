import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import { useState } from 'react';


const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='App'>
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg = {setSelectedImg} />
        {
          selectedImg && <Modal setSelectedImg = { setSelectedImg }selectedImg = {selectedImg} />
        }
    </div>
  )
}

export default App