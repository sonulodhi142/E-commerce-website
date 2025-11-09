import React, { useContext } from "react";
import './AddCartSucces.css'

const AddCartSucces = () => {
    
  return (
    <div className="modal open" id="modal">
      <div className="modal-inner ">
        <h2>Done !</h2>
        <p>Succesfully added to the Cart 🫡</p>
        <button className="closeModal">close</button>
      </div>
    </div>
  );
};

export default AddCartSucces;
