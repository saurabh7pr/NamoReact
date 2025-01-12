import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
console.log("logo url is",LOGO_URL)

const Header = () =>{
    const[btnText,setbtnText]=useState("Login")
    return(
        <div className="flex bg-pink-200 justify-between shadow-lg h-30" >
        <div className="logo-container">
            <img
            className="w-[110px] p-2 mx-8"
            src={logo}
            />
            
            

        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4 ">
                <li className="px-5"><Link to="/">Home</Link></li>


                <li className="px-5"> <Link to="/about"> About</Link>    </li>

                <li className="px-5"> <Link to="/contact"> contact</Link>    </li>
                <li className="px-5"> <Link to="/grocery"> Grocery</Link>    </li>


                

                 
                <li className="px-3">Cart</li>
                <button className="px-5"
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