import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './print.css';
const PrintBarcode = () => {
    const location = useLocation();
  const selectedImages = location.state.data;

    useEffect(()=>{
        setTimeout (()=>{

            window.print()
        },1000)
    },[])

  return (
    <div className="container">
    {selectedImages.map((image, index) => (
        Array.from({length:4},(_,i)=>(
            <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Image ${index}`}
            className='printimage'
          />
        ))
     
    ))}




  </div>

  )
} 

export default PrintBarcode