
import HomePage from "./pages/HomePage";
import { Routes,Route } from "react-router-dom";
import CollectionPage from "./pages/CollectionPage";
import Breadcrumb from "./pages/Breadcrumb";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";


const App = () => {



  return (
    <div className="bg-gray-950 min-h-screen w-full ">

      <Breadcrumb />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>

      <ToastContainer 
      position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}/>
      
   

    </div>
  );
};

export default App;