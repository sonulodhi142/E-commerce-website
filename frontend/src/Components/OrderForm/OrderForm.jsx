import React, { useState } from 'react'
import './OrderForm.css'
import axios from 'axios'

const OrderForm = ({ loading, showPopup, closePopup, setLoading, setShowPopup}) => {
    const [Load, setLoad] = useState(false)
    const [formData, setFormData] = useState({
        name : '',
        address: '',
        phoneNo: '',
        size: '',
        pincode: ''
    })

    function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    setLoad(true);
    setLoading(true);
    setTimeout(() => {
      alert('Order submitted successfully!');
      setLoading(false);
      setShowPopup(false);
    }, 1500);
    try {
      const response =axios.post(
        "http://127.0.0.1:8000/api/order/", 
        formData
      );
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoad(false);
    }
  }

  if (!showPopup) return null;
    // axios.post('http://127.0.0.1:8000/api/order/', )
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={closePopup}>×</button>
        <form method="POST" onSubmit={handleSubmit} className="order-form">
          <h2>Delivery Details</h2>
          <p>Please provide your location details to deliver your order.</p>

          <input type="text" name="name" onChange={handleChange} placeholder="Enter your name" required />
          <input type="text" name="address" onChange={handleChange} placeholder="Enter your address" required />
          <input type="number" name="pincode" onChange={handleChange} placeholder="Pin code" required />
          <input type="number" name="phoneNo" onChange={handleChange} placeholder="Phone number" required />

          <label htmlFor="size">Select Size:</label>
          <select name="size" id="size" onChange={handleChange}>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="X">X</option>
            <option value="XL">XL</option>
          </select>

          <button type="submit" disabled={Load}>
            {Load ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default OrderForm