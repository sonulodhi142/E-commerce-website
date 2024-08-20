import React, { useState } from "react";
import './Menu.css'
import all_product from "../Components/Assets/all_product"


const Menu = ( ) => {

    const [cart , setCart] = useState(all_product)
    
    return(
        cart.map((e)=>{
                return <div className="cart">
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} className="cartitems-product-icon" alt="" />
                    <p className="item-name">{e.name}</p>
                    <p className="new-price">${e.new_price} <span className="old-price">${e.old_price}</span></p>
                    <p></p>
                    <button className="cartitems-quantity">Order Now</button>
                    
                </div>
                <hr />
            </div>
        }
    )
 )
}
export default Menu;