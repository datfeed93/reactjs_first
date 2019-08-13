import React, {Component} from 'react';
import LoginForm from "../components/users/LoginForm";
import {loginRequest} from '../actions/index';
import {connect} from 'react-redux';

class Login extends Component{
    onSubmit = (values) => {
        this.props.loginRequest(values.username,values.password);
    }
    render(){
        var {user} = this.props;
        return(
            <div className="login-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-6">
                            <LoginForm user={user} onSubmit={this.onSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return  {
        loginRequest: (username, password) => {
            dispatch(loginRequest(username, password));
        }
    }
}
export default (connect(mapStateToProps, mapDispatchToProps)) (Login);