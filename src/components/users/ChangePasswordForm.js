import React, {Component} from 'react';

class ChangePasswordForm extends Component{
    render(){
        return(
            <div className="login-form">
                <div className="card">
                    <div className="card-header">
                        ChangePassword
                    </div>
                    <div className="card-body">
                        <form className="login-form__form">
                            <div className="form-group">
                                <label htmlFor="oldPassword">Old Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="oldPassword"
                                    name="oldPassword"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newPassword">New Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="newPassword"
                                    name="newPassword"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reNewPassword">Re New Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="reNewPassword"
                                    name="reNewPassword"
                                />
                            </div>

                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default ChangePasswordForm;