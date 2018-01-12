import React, { Component } from 'react';
import LoginForm from './presenter';


class Container extends Component{
    state = {
        username: '',
        password: ''
    };

    render(){
        const { username, password } = this.state;
        return <LoginForm 
            handleInputChange={this._handleInputChangeEvent}
            handleSubmit={this._handleSubmit}
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
}

export default Container;
