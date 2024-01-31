// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function ImageUploader() {

//   const navigate =useNavigate()

//   const [selectedImages, setSelectedImages] = useState([]);

//   // Function to handle image selection
//   const handleImageChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedImages(files);
//   };

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can do something with the selected images if needed
//   };

//   // Function to handle printing
//   const handlePrint = () => {
//     // Navigate to "/printBarcode" route and pass selectedImages as state
//     navigate("/printBarcode", { state: { data: selectedImages } });
//   };

//   // Render the selected images four times each
//   const renderImages = () => {
//     return selectedImages.map((image, index) => (
//       <div key={index}>
//         {Array.from({ length: 4 }, (_, i) => (
//           <img
//             key={i}
//             src={URL.createObjectURL(image)}
//             alt={`Image ${index}_${i}`}
//             style={{ width: '100px', height: '100px', marginRight: '10px' }}
//           />
//         ))}
//       </div>
//     ));
//   };

//   return (

//     <>
    
//     <div>
//       <h2>Image Uploader</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" accept="image/*" multiple onChange={handleImageChange} />
//         {/* <button type="submit">Upload</button> */}
//       </form>
//       <button onClick={handlePrint}>Print</button>
//       {selectedImages.length > 0 && renderImages()}
//     </div>
//     </>
//   );
// }

// export default ImageUploader;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import './ImageUploader.css';

// Import your custom upload image
import uploadImage from '../images/upload.png'; // Replace with your image path

function ImageUploader() {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional processing logic if needed
  };

  const handlePrint = () => {
    navigate("/printBarcode", { state: { data: selectedImages } });
  };

  const renderImages = () => {
    return selectedImages.map((image, index) => (
      <div key={index} className="image-container">
        {Array.from({ length: 4 }, (_, i) => (
          <img
            key={i}
            src={URL.createObjectURL(image)}
            alt={`Image ${index}_${i}`}
            className="uploaded-image"
          />
        ))}
      </div>
    ));
  };

  return (
    <div className="image-uploader-container">
      <h2 className="uploader-heading">barcode Uploader</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-input" className="file-input-label">
          <img src={uploadImage} alt="Upload" className="upload-image" />
        </label>
        <input type="file" accept="image/*" multiple onChange={handleImageChange} id="file-input" className="file-input" />
        {/* <button type="submit" className="upload-button">Upload</button> */}
      </form>
      <button onClick={handlePrint} className="print-button">
        <FontAwesomeIcon icon={faPrint} className="print-icon" />
        Print
      </button>
      {selectedImages.length > 0 && renderImages()}
    </div>
  );
}

export default ImageUploader;
