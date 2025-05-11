import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    render(){
        return (
                    <div>
                        <h1>About</h1>
                        {/* <User name="rahul fun" /> */}
                        <UserClass name="Rahu" location="Delhi class" contact="rahulsajwan05 class" />
                    </div>
                )   
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             {/* <User name="rahul fun" /> */}
//             <UserClass name="Rahu" location="Delhi class" contact="rahulsajwan05 class" />
//         </div>
//     )   
// }


export default About;
