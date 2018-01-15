//imports 




// actions

//api actions
function getFeed(){
    return (dispatch, getState) => {
        const { user: { token }} = getState();
        fetch("/images/", {
                headers: {
                    "Authorization" : `JWT ${token}`
                }
            })
        .then(response => response.json())
        .then(json => console.log(json));
    };
}

//initial state
const initialState = {
    feed: []
};

//reducer
function reducer(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}

//reducer functions


//actioncreator
const actionCreators = {
    getFeed
};


//export
export { actionCreators };



//export default reducer
export default reducer;