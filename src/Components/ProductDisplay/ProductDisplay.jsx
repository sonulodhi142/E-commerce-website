import React from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from "react";
import { ShopContaxt } from "../../Contaxt/ShopContaxt";


const ProductDisplay = (props) =>{
    const {product} = props;
    const {addToCart} = useContext(ShopContaxt);
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} alt="" className="productdisplay-main-img" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas labore, dicta porro iusto dolorem, quibusdam repellendus eos voluptatem quod laborum, temporibus optio! Placeat accusamus nesciunt ab, totam quos repellendus?</div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
                <p className="productdisplay-right-category">
                    <span>Category :</span>women , T-shirt , Crop Top
                </p>
                <p className="productdisplay-right-category">
                    <span>Tag :</span>modern , letast , new
                </p>
            </div>
        </div>
    )
}

export default ProductDisplay;