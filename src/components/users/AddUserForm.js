import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 3) {
        errors.username = 'Must be at less 3 characters';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 3) {
        errors.password = 'Must be at less 3 characters';
    }
    if(!values.email){
        errors.email = 'Required';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
    }
    if(values.phone){
        if(!/^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/.test(values.phone)) {
            errors.phone = 'Invalid phone';
        }
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

const AddUserForm = (props) => {
    const { handleSubmit, submitting } = props;
    return (
        <div className="card">
            <div className="card-header text-center">
                <strong className="text-uppercase">
                    Add User
                </strong>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <Field name="username" type="text" component={renderField} label="Username"/>
                    <Field name="password" type="password" component={renderField} label="Password"/>
                    <Field name="email" type="text" component={renderField} label="Email"/>
                    <Field name="phone" type="text" component={renderField} label="Phone"/>
                    {/*<Field name="avatar" type="file" component="input" label="Avatar"/>*/}
                    <div className="form-group text-center">
                        <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'add-user',
    validate,
})(AddUserForm)