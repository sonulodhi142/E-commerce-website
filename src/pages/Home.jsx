import React from "react";
import './Home.css'


const Home = ( ) => {

    return(
        <div className="bg">
            <div className="bg-part">
                <div className="bg-left">
                    <h1>welcome to the greatest hotel in india</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque non nemo, sed blanditiis fugit reprehenderit. Quibusdam architecto modi deleniti dolores deserunt quidem provident, voluptas rerum ab cumque eligendi illo fugit?</p>
                </div>
                <div className="bg-right">
                <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text " placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button onClick={()=>{alert("Sorry ! there is no backend connectiviy")}}>Continue</button>
                <p className="loginsignup-login">Already have and an account ? <span>Login Here</span></p>
                <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p >By continuing , i agree to the term of use & privacy policy.</p>
                </div>
            </div>
                </div>
                
            </div>

        </div>
    )
}

export default Home;