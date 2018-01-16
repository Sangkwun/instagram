import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import UserList from './presenter';

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getPhotoLikes: PropTypes.func.isRequired
  };
  render() {
    const { userList } = this.props;
    return <UserList {...this.props} {...this.state} userList={userList} />;
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.userList) {
      this.setState({
        loading: false,
      });
    }
  };
}


export default Container;