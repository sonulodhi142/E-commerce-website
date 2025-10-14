import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContaxt = createContext(null);

const getDefaultCart = () =>{

    let Cart = {};
    for (let index = 0; index < all_product.length; index++){
        Cart[index] = 0;
    }
    return Cart;
}

const ShopCantaxtProvider = (props) =>{

    const [cartItems, setCartItem] = useState(getDefaultCart);

    

    const addToCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        alert("Your Product is Succesfully add to the Cart")
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
    
    
    
    const contaxtValue = {getTotalCartItem,getTotalCartAmount, all_product,cartItems,addToCart,removeFromCart}
    

    return(
        <ShopContaxt.Provider value={contaxtValue}>
            {props.children}
        </ShopContaxt.Provider>
    )
}

export default ShopCantaxtProvider;