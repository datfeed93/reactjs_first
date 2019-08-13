import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length < 3) {
        errors.username = 'Must be at less 3 characters'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 3) {
        errors.password = 'Must be at less 3 characters'
    }
    return errors
}
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="form-group">
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} className="form-control"/>
        {touched && ((error && <div className="text-danger">{error}</div>) || (warning && <div className="text-danger">{warning}</div>))}
    </div>
)

const LoginForm = (props) => {
    const { handleSubmit, submitting, user } = props;
    return (
        <div className="card">
            <div className="card-header text-center">
                <strong className="text-uppercase">
                    Login
                </strong>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <Field name="username" type="text" component={renderField} label="Username"/>
                    <Field name="password" type="password" component={renderField} label="Password"/>
                    <div className="form-group text-center">
                        <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
                    </div>
                    {
                        (user && user.user === null)
                        ?
                        <div className="form-group text-center">
                            <span className="text-danger">{user.message}</span>
                        </div>
                        :
                        ''
                    }
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'login',
    validate,
})(LoginForm)