import React from "react";
import './About.css'
import p9_img from './image/bg-final.jpg'

const About = ( ) => {

    return(
        <div className="about">
           <div className="about-left">
                <h1>Zomato Clone</h1>
                <h2>India's greatest hotel</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsam ex corrupti perferendis aut cumque ad corporis perspiciatis vel inventore, nihil aliquid, possimus consectetur animi incidunt odio voluptas. Dicta, odio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id assumenda ut dicta consectetur temporibus facilis, aut facere officiis quam nobis maxime provident fugit distinctio eligendi. Porro dolor molestias numquam commodi.</p>
            </div>
            <div className="about-right">
                <img src={p9_img} alt="" />
            </div> 
        </div>
    )
}

export default About;