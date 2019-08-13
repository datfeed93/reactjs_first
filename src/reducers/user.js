import * as Types from './../constants/ActionTypes';
var inititalState = {
    message: '',
    user: null
};

const user = (state = inititalState, action) => {
    switch(action.type){
        case Types.LOGIN :
            if(action.user.length){
                var user = (action.user)[0];
                localStorage.setItem('user',JSON.stringify(user));
                state = {
                    message: 'ok',
                    user:user
                }
            }else{
                state = {
                    message: 'username or password is wrong',
                    user:null
                }
            }
            return state;
        default:
            return state;
    }
}
export default user;