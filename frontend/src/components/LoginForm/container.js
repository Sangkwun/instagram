import React, { Component } from 'react';
import LoginForm from './presenter';
import PropTypes from 'prop-types';


class Container extends Component{
    state = {
        username: '',
        password: ''
    };

    static propTypes = {
        facebookLogin : PropTypes.func.isRequired,
        usernameLogin : PropTypes.func.isRequired
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

        const { usernameLogin } = this.props;
        const { username, password } = this.state;
        console.log(this.state);
        //Redux Action
        usernameLogin(username, password)

    }
    _handleFacebookLogin = response =>{
        console.log(response)
        const { facebookLogin } = this.props;
        //Redux Action
        facebookLogin(response.accessToken);
    }
}

export default Container;
