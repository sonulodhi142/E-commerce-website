import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () =>{
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-nevigator">
                <div className="description-nav-box">Description</div>
                <div className="description-nav-box fade">Review (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam eos nam magni beatae ab ea, voluptatem earum aut eius praesentium soluta atque consequuntur distinctio dicta vitae quibusdam odit incidunt!Lorem
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam eos nam magni beatae ab ea, voluptatem earum aut eius praesentium soluta atque consequuntur distinctio dicta vitae quibusdam odit incidunt!Lorem
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;