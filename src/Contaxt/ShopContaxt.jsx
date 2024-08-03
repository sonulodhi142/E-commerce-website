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
        console.log(cartItems)
    }

    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    
    const contaxtValue = {all_product,cartItems,addToCart,removeFromCart}
    

    return(
        <ShopContaxt.Provider value={contaxtValue}>
            {props.children}
        </ShopContaxt.Provider>
    )
}

export default ShopCantaxtProvider;