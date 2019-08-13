import * as Types from './../constants/ActionTypes';
var inititalState = {
    message: '',
    users: []
};

const users = (state = inititalState, action) => {
    switch(action.type){
        case Types.GET_USERS :
            state = {
                message: 'ok',
                users:action.users
            }
            return {...state};
        case Types.DELETE_USER :
            state.message = 'deleted';
            return {...state};
        case Types.ADD_USER :
            state.message = 'created';
            return {...state};
        default:
            return state;
    }
}
export default users;