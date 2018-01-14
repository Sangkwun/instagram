import { connect } from 'react-redux';
import container from './container';

const mapStateToProps = (state, ownProps) => {
  const { user, routing : { location } } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    pathname : location.pathname
  };
};

export default connect(mapStateToProps)(container);