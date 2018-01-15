//imports 
import { actionCreators as userActions } from 'redux/modules/user';


// actions
const SET_FEED = "SET_FEED";

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

//api actions
function getFeed(){
    return (dispatch, getState) => {
        const { user: { token }} = getState();
        fetch("/images/", {
                headers: {
                    "Authorization" : `JWT ${token}`
                }
            })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json();
        })
        .then(json => dispatch(setFeed(json)));
    };
}

//initial state
const initialState = {
    feed: []
};

//reducer
function reducer(state=initialState, action){
    switch(action.type){
        case SET_FEED:
            return applySetFeed(state, action)
        default:
            return state;
    }
}

//reducer functions
function applySetFeed(state, action){
    const { feed } = action;
    return {
        ...state,
        feed
    }
}

//actioncreator
const actionCreators = {
    getFeed
};


//export
export { actionCreators };



//export default reducer
export default reducer;