import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

   const [btnNameReact, setBtnNameReact] = useState("Login");

  //  * if no dependency array => its called on every render
  //  * if dependency array is empty => called on only intial render just ones
  //  *if we have something in dependency array [btnNameReact] => only called if the dependency changes
  //  means everytime btnNameReact name changes, useEffect will be called

   useEffect(()=>{
    console.log("useEffect called");
   },[]) 
    return (
      <div className="flex justify-between bg-gray-200">
        <div className="logo-container">
          <img className="w-36"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
            <Link to="/">Home</Link>  
            </li>
            <li className="px-4">
            <Link to="/about">About</Link>  
            </li>
            <li className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">Cart</li>
            <button className="login-btn" 
            onClick={()=>{
             btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    )
  };

  export default Header;