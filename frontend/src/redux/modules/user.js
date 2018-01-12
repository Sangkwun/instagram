//imports


//actions

// API actions
function facebookLogin(access_token){
    return function(dispatch){
        fetch("/users/login/facebook/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            access_token //Access token JSON을 string으로 변환
          })
        })
        .then(response => response.json())
        .then(json=> console.log(json))
        .then(err=>console.log(err))
    };
}

//action creator
const actionCreators = {
    facebookLogin
};

export { actionCreators }

//initial state

const initialState = {
    isLoggedIn: localStorage.getItem('jwt') || false
};


//reducer
function reducer(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}



//reducer function




//exports



//reducer export
export default reducer;