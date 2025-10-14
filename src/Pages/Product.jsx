import React, { useContext } from "react";
import './CSS/Product.css'
import {ShopContaxt} from '../Contaxt/ShopContaxt'
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/breadcrums/breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

const Product = () =>{
    const {all_product} =useContext(ShopContaxt);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id===Number(productId))
    return (
        <div className="product">
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <RelatedProduct/>
        </div>
    )
}

export default Product;