import React, { useContext } from "react";
import './AddCartSucces.css'
import { ShopContaxt } from "../../Contaxt/ShopContaxt";

const AddCartSucces = () => {
  const {setShowSuccess} = useContext(ShopContaxt);
    
  return (
    <div className="modal open" id="modal">
      <div className="modal-inner ">
        <h2>Done !</h2>
        <p>Succesfully added to the Cart 🫡</p>
        <button onClick={()=> {setShowSuccess(false)}} className="closeModal">close</button>
      </div>
    </div>
  );
};

export default AddCartSucces;
