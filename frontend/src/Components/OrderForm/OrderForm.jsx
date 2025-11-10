import React, { useState } from 'react'
import './OrderForm.css'
import axios from 'axios'

const OrderForm = () => {
    const [loading, setLoading] = useState(false)
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
    setLoading(true);

    try {
      const response =axios.post(
        "http://127.0.0.1:8000/api/order/", 
        formData
      );
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

    // axios.post('http://127.0.0.1:8000/api/order/', )
  return (
    <form method='POST' onSubmit={handleSubmit}>
        <h1>Enter Details</h1>
        <input type="text" name='name' onChange={handleChange} placeholder='Enter name' />
        <br /><br />
        <input type="text" name="address" onChange={handleChange} placeholder='Enter address' />
        <br /><br />
        <input type="number" name='pincode' onChange={handleChange} placeholder='pin code' />
        <br />
        <br />
        <input type="number" name='phoneNo' onChange={handleChange} placeholder='Enter phone no.' />
        <select name="size" id="" onChange={handleChange}>
            <option value="S" key="">S</option>
            <option value="M" key="">M</option>
            <option value="X" key="">X</option>
            <option value="XL" key="">XL</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
    </form>
  )
}

export default OrderForm