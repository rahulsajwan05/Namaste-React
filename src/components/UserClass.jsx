import React from "react";

class UserCLass extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            userInfo :{
                name:"Dummy Data",
                location:"Dummy Location",
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/rahulsajwan05");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        
        const { name, location, contact , avatar_url } = this.state.userInfo
        return (
        <div className="card"> 
        <img src={avatar_url} alt="user" style={{width:100, height:100}} />
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>

        </div>
    )
    }
}

export default UserCLass;