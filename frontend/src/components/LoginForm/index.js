import { connect }  from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        facebookLogin: (access_token) => {
            dispatch(userActions.facebookLogin(access_token))
        }
    }
}

export default connect(null,mapDispatchToProps)(Container);//첫번째는 mapStatetoProps임 여기서는 없으므로 null