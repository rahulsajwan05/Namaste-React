import { useState } from "react";

const User = (props) =>{

    const [count , setCount ]= useState(0);
    const [count2]= useState(0);
    return ( 
        <div className="card"> 
            <h2>Name: {props.name}</h2>
            <h3>Location: Delhi</h3>
            <h4>Contact: @rahulsajwan05</h4>
            <h4>Count: {count}</h4>
            <h4>Count2: {count2}</h4>   
            <button onClick={()=>{
                setCount(count+1);
            }}> plus </button>
        </div>
    )
}

export default User;