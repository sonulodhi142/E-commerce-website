import React, { useContext } from "react";
import './CartItems.css';
import { ShopContaxt } from "../../Contaxt/ShopContaxt";
import remove_icon from '../Assets/cart_cross_icon.png';

 
const CartItems = () =>{

    const {all_product,cartItems,removeFromCart}= useContext(ShopContaxt);

    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Peoducts</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    return <div>
                    <div className="cartitems-format">
                        <img src={e.image} className="cartitems-product-icon" alt="" />
                        <p>{e.name}</p>
                        <p>{e.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[e.id]}</button>
                        <p>{e.new_price*cartItems[e.id]}</p>
                        <img src={remove_icon} onClick={()=>{removeFromCart(e.id )}} alt="" />
                    </div>
                    <hr />
                </div>
                }
            })}
        </div>
    )
} 

export default CartItems;