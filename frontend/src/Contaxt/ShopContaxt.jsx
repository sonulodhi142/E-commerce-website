import React, { createContext, useEffect, useState } from "react";
import all_product from '../Components/Assets/all_product'
import axios from "axios";
export const ShopContaxt = createContext(null);



const ShopCantaxtProvider = (props) =>{
    const [showSuccess, setShowSuccess] = useState(false);
    const [products , setProducts] = useState();
    const [cartItems, setCartItem] = useState([]);
    const [loading, setloading] = useState(true);
    
    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/api/all_product/")
        .then((response) => {
            console.log("api response =",response.data)
            setProducts(response.data)
            setloading(false)
        })
        .catch((error) => {
            console.error("Error fetching data:", error)
        })
    },[])
    

    const addToCart = (itemId) =>{
        let item = products.find((item)=> item.id === itemId)
        setCartItem((prev)=>([...prev, item]))
        setShowSuccess(true)
    }

    const removeFromCart = (itemId) =>{
        let items = cartItems.filter((item)=> item.id !== itemId)
        setCartItem(items)
    }

    const getTotalCartAmount = () =>{
        let totalAmout = 0;
        cartItems.map((e)=> {
            return totalAmout += parseInt(e.new_price)
        })
        return totalAmout;
    }

    const getTotalCartItem = () =>{
        let TotalItem = 0;
        cartItems.map((e)=> {
            return TotalItem += 1
        })
        return TotalItem;
    }
    
    
    
    const contaxtValue = {getTotalCartItem,getTotalCartAmount,products ,all_product,cartItems,addToCart,removeFromCart,showSuccess,setShowSuccess,loading}
    

    return(
        <ShopContaxt.Provider value={contaxtValue}>
            {props.children}
        </ShopContaxt.Provider>
    )
}

export default ShopCantaxtProvider;