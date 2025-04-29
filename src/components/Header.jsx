import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {

   const [btnNameReact, setBtnNameReact] = useState("Login");
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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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