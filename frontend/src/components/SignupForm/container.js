import React,{ Component } from "react";
import SignForm from "./presenter";
import PropTypes from 'prop-types'

//const Container = props => <SignForm {...props} />;

class Container extends Component{
    state = {
        email: "",
        fullname: "",
        username: "",
        password: ""
    };

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired
    };

    render(){
        const { email, fullname, username, password } = this.state;
        return <SignForm emailValue={email} fullnameValue={fullname} usernameValue={username} passwordValue={password} handleInputChange={this._handleInputChange} handleSubmit={this._handleSubmit} handleFacebookLogin={this._handleFacebookLogin}/>;
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
    _handleFacebookLogin = response =>{
        console.log(response)
        const {facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }
}

export default Container;
