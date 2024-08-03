import React from "react";
import './RelatedProduct.css';
import data_product from "../Assets/data"

const RelatedProduct = () =>{
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproduct-item">
                {data_product.map(()=>)}
            </div>
        </div>
    )
}

export default RelatedProduct;