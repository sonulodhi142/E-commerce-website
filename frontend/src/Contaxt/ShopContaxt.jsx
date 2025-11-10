import React, { createContext, useEffect, useState } from "react";
import all_product from '../Components/Assets/all_product'
import axios from "axios";
export const ShopContaxt = createContext(null);

const getDefaultCart = () =>{

    let Cart = {};
    for (let index = 0; index < all_product.length; index++){
        Cart[index] = 0;
    }
    return Cart;
}

const ShopCantaxtProvider = (props) =>{
    const [showSuccess, setShowSuccess] = useState(false);
    const [products , setProducts] = useState();
    const [cartItems, setCartItem] = useState(getDefaultCart);
    
    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/api/all_product/")
        .then((response) => {
            console.log("api response =",response.data)
            setProducts(response.data)
        })
        .catch((error) => {
            console.error("Error fetching data:", error)
        })
    },[])
    

    const addToCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        setShowSuccess(true)
    }

    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmout = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmout += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmout;
    }

    const getTotalCartItem = () =>{
        let TotalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                TotalItem += cartItems[item];
            }
        }
        return TotalItem;
    }
    
    
    
    const contaxtValue = {getTotalCartItem,getTotalCartAmount,products ,all_product,cartItems,addToCart,removeFromCart,showSuccess,setShowSuccess}
    

    return(
        <ShopContaxt.Provider value={contaxtValue}>
            {props.children}
        </ShopContaxt.Provider>
    )
}

export default ShopCantaxtProvider;