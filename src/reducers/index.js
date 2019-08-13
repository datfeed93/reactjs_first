import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import users from './users';
import user from './user';
const appReducers = combineReducers({
    users,
    user,
    form: formReducer
});
export default appReducers;