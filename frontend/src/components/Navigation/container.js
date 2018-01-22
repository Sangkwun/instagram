import React,{ Component } from 'react';
import Navigation from './presenter';
import PropTypes from 'prop-types';

class Container extends Component{
    state = {
        term: ""
    };
    render(){
        return <Navigation 
                {...this.state} 
                onInputChange = {this._onInputChange} 
                onSubmit = {this._onSubmit}
                value = {this.state.term}
            />
    };
    _onInputChange = (event) => {
        const { target : { value }} = event;
        this.setState({
            term: value
        });
    }
    _onSubmit = (event) => {
        const { goToSearch } = this.props;
        const { term } = this.state;
        event.preventDefault()
        goToSearch(term)
        this.setState({
            term: ""
        })
    }
    static propTypes = {
        goToSearch : PropTypes.func.isRequired
    }
};


export default Container;