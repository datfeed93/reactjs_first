import * as Types from './../constants/ActionTypes';
import api from './../utils/api';

export const loginRequest = (username,password) => {
    return (distpatch) => {
        return api(
            `users?username=${username}&password=${password}`,
            'GET',
            null,
            null
        ).then(res => {
            distpatch(login(res.data));
        });
    }
}
export const login = (user) => {
    return {
        type: Types.LOGIN,
        user: user
    }
}

export const getUsersRequest = () => {
    return (distpatch) => {
        return api(
            'users',
            'GET',
            null,
            null
        ).then(res => {
            distpatch(getUsers(res.data));
        });
    }
}
export const getUsers = (users) => {
    return {
        type: Types.GET_USERS,
        users: users
    }
}

export const deleteUserRequest = (id) => {
    return (distpatch) => {
        return api(
            `users/${id}`,
            'DELETE',
            null,
            null
        ).then(res => {
            distpatch(deleteUser(res.data));
        });
    }
}
export const deleteUser = (deleteUser) => {
    return {
        type: Types.DELETE_USER,
        deleteResult: deleteUser
    }
}

export const addUserRequest = (user) => {
    return (distpatch) => {
        return api(
            'users',
            'POST',
            user,
            null
        ).then(res => {
            distpatch(addUser(res.data));
        });
    }
}
export const addUser = (addUser) => {
    return {
        type: Types.ADD_USER,
        addUser: addUser
    }
}