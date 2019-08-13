import React, {Component} from 'react';
import ChangePasswordForm from "../components/users/ChangePasswordForm";

class Login extends Component{
    render(){
        return(
            <div className="change-password-page">
                <ChangePasswordForm />
            </div>
        )
    }
}
export default Login;