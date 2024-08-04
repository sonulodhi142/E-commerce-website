import React, { useContext } from "react";
import './CartItems.css';
import { ShopContaxt } from "../../Contaxt/ShopContaxt";
import remove_icon from '../Assets/cart_cross_icon.png';

 
const CartItems = () =>{

    const {getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContaxt);

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
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} className="cartitems-product-icon" alt="" />
                        <p>{e.name}</p>
                        <p>{e.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className="cartitem-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id )}} alt="" />
                    </div>
                    <hr />
                </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promodoce">
                    <p>If you gave a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" />
                        <button>Submit</button>
                    </div>
                    <p>If you gave a discount code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
} 

export default CartItems;