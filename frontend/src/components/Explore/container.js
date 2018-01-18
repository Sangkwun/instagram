import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Explore from './presenter';

class Container extends Component {
  state = {
    loading: true
  };

  static propTypes = {
    getExplore: PropTypes.func.isRequired,
    userList: PropTypes.array
  };

  componentDidMount() {
    const { getExplore } = this.props;
    
    if (!this.props.userList) {
      //!this.props.feed에서 length체크로 변경
      getExplore();
    } else {
      //console.log(this.props.feed);
      this.setState({ loading: false }); //Component가 등장할 때 마다 loading은 true가 되므로
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.userList){
      this.setState({
        loading: false,
      });
    }
  }
  
  render() {
    const { userList } = this.props;
    return <Explore {...this.state} userList={userList} />;
  }
};

export default Container;