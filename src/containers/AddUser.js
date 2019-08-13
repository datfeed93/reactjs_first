import React, {Component} from 'react';
import AddUserForm from "../components/users/AddUserForm";
import {loginRequest, addUserRequest} from '../actions/index';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

class AddUser extends Component{
    onSubmit = (values) => {
        var user = {
            username: values.username,
            password: values.password,
            email:values.email,
            phone: values.phone,
            avatar: 'https://via.placeholder.com/100x100'
        };
        this.props.addUserRequest(user);
    }
    render(){
        let {users} = this.props;
        if(users.message === 'created'){
            return <Redirect to='/list-user' />
        }
        return(
            <div className="add-user-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-6">
                            <AddUserForm onSubmit={this.onSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        users: state.users
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return  {
        loginRequest: (username, password) => {
            dispatch(loginRequest(username, password));
        },
        addUserRequest: (user) => {
            dispatch(addUserRequest(user));
        }
    }
}
export default (connect(mapStateToProps, mapDispatchToProps)) (AddUser);