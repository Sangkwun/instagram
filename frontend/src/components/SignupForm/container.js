import React,{ Component } from "react";
import SignForm from "./presenter";

//const Container = props => <SignForm {...props} />;

class Container extends Component{
    state = {
        email: "",
        fullname: "",
        username: "",
        password: ""
    };

    render(){
        const { email, fullname, username, password } = this.state;
        return <SignForm emailValue={email} fullnameValue={fullname} usernameValue={username} passwordValue={password} handleInputChange={this._handleInputChange} handleSubmit={this._handleSubmit}/>;
    };
    _handleInputChange = event =>{
        const {target:{ value, name }} = event;
        this.setState({ [name]:value })
        //console.log({ [name]: value });

    }
    _handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state);
    }
}

export default Container;
