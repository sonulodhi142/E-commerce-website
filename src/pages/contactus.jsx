import React from "react";
import './contactus.css'

const Contact = ( ) => {

    return(
        <div className="contactus">
            <div className="left-part">
                <h1>Zomato Clone</h1>
                <h2>India's greatest hotel</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, officia earum repellat, temporibus aliquam fugit minus dolore facilis illum ut saepe voluptates aut! Aut eveniet minus sit eum quam praesentium!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta labore exercitationem culpa, illo dolorem optio quo quasi necessitatibus sequi quas veniam, quos ipsum saepe commodi? Impedit quia repellat cumque ducimus?</p>
            </div>
            <div className="right-part">
                <form action="#">
                    <input type="text" placeholder="Enter Your Name Here" />
                    <input type="email" placeholder="Enter Your Email Here" />
                    <input type="number" placeholder="Enter Your Contect Number Here" />
                    <textarea name="comment" id="comment" placeholder="Write Your comment"></textarea>
                    <button>Submit</button>
                    
                    <p> <input type="checkbox" />i have confirm?</p>
                </form>
            </div>
            
        </div>
    )
}

export default Contact;