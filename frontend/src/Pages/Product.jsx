import React, { useContext } from "react";
import './CSS/Product.css'
import {ShopContaxt} from '../Contaxt/ShopContaxt'
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/breadcrums/breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

const Product = () =>{
    const {all_product, products, loading} =useContext(ShopContaxt);
    const {productId} = useParams();
    const product = products.find((e)=>e.id===Number(productId))
    if (loading) return <div>loading</div>
    return (
        <div className="product">
            <Breadcrum product={product}/>
            {
                (product) ? <ProductDisplay product={product}/> : <div>Loading</div>
            }
            <DescriptionBox />
            <RelatedProduct/>
        </div>
    )
}

export default Product;