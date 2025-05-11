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
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
            <Link to="/">Home</Link>  
            </li>
            <li>
            <Link to="/about">About</Link>  
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>Cart</li>
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