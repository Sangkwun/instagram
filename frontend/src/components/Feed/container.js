import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Feed from './presenter';

class Container extends Component {
  state = {
    loading: true
  };

  static propTypes = {
    getFeed: PropTypes.func.isRequired,
    feed: PropTypes.array
  };

  componentDidMount() {
    const { getFeed } = this.props;
    
    if (!this.props.feed) {
      //!this.props.feed에서 length체크로 변경
      getFeed();
    } else {
      //console.log(this.props.feed);
      this.setState({ loading: false }); //Component가 등장할 때 마다 loading은 true가 되므로
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.feed){
      this.setState({
        loading: false,
        feed: nextProps.feed
      });
    }
  }
  
  render() {
    const { feed } = this.props;
    return <Feed {...this.state} feed={feed} />;
  }
};

export default Container;