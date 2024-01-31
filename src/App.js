import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImagesUploader from "./component/ImagesUploader";
import PrintBarcode from "./component/PrintBarcode";


function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Routes>
      <Route exact path ="/" element={<ImagesUploader/>} />
      <Route exact path ="/PrintBarcode" element={<PrintBarcode/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
