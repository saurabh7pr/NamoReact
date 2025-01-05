import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
console.log("logo url is",LOGO_URL)

const Header = () =>{
    const[btnText,setbtnText]=useState("Login")
    return(
        <div className="header">
        <div className="logo-container">
            <img
            className="logo"
            src={LOGO_URL}
            />
            
            

        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>


                <li> <Link to="/about"> About</Link>    </li>

                <li> <Link to="/contact"> contact</Link>    </li>


                

                 
                <li>Cart</li>
                <button className="login-btn"
                 onClick={()=>{
                   if( btnText === "Login"? setbtnText("Logout") : setbtnText("Login") );
                 }}

                >{btnText}</button>
            </ul>

        </div>

    </div>
    );
    
}



export default Header