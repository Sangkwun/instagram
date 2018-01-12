import { connect } from 'react-redux';
import Container from './container';
import {actionCreators as userActions} from 'redux/modules/user';

const mapDispathToProps = (dispatch, ownProps) => {
    return {
        facebookLogin: (access_token) => {
            dispatch(userActions.facebookLogin(access_token))
        }
    }
}

export default connect(null, mapDispathToProps)(Container);


