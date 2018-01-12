import React, { Component } from 'react';
import LoginForm from './presenter';
import PropTypes from 'prop-types';


class Container extends Component{
    state = {
        username: '',
        password: ''
    };

    static propTypes = {
        facebookLogin : PropTypes.func.isRequired
    };

    render(){
        const { username, password } = this.state;
        return <LoginForm 
            handleInputChange={this._handleInputChangeEvent}
            handleSubmit={this._handleSubmit}
            handleFacebookLogin={this._handleFacebookLogin}
            usernameValue={username} 
            passwordValue={password}/>
    };
    _handleInputChangeEvent = event =>{
        
        const { target : { value, name }} = event;
        //const value = event.target;
        
        this.setState({
            [name] : value 
        })
    };
    _handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state);
        //Redux Action

    }
    _handleFacebookLogin = response =>{
        console.log(response)
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
        //Redux Action
    }
}

export default Container;
