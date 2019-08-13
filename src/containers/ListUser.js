import React, {Component} from 'react';
import LoginForm from "../components/users/LoginForm";
import {getUsersRequest, deleteUserRequest} from '../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ListUser extends Component{
    componentDidMount(){
        this.props.getUsersRequest();
    }
    onDelete = (id) => {
        this.props.deleteUserRequest(id);
        this.props.getUsersRequest();
    }
    render(){
        var {users} = this.props;
        var listItems = '';
        if(users.users){
            listItems = users.users.map((item, index) =>
                <tr key={index}>
                    <td className="align-middle">
                        {index + 1}
                    </td>
                    <td className="align-middle">
                        {item.username}
                    </td>
                    <td className="align-middle">
                        {item.password}
                    </td>
                    <td className="align-middle">
                        <img src={item.avatar} alt="avatar"/>
                    </td>
                    <td className="align-middle">
                        {item.email}
                    </td>
                    <td className="align-middle">
                        {item.phone}
                    </td>
                    <td className="align-middle">
                        <button type="button" className="btn btn-primary">Edit</button>
                        <button type="button" className="ml-2 btn btn-danger" onClick={() => this.onDelete(item.id)}>Delete</button>
                    </td>
                </tr>
            );
        }
        return(
            <div className="list-user-page">
                <div className="container">
                    <h4 className="text-center text-uppercase mb-4">User manager</h4>
                    <Link to="/add-user">Add User</Link>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    Numerical order
                                </th>
                                <th>
                                    Username
                                </th>
                                <th>
                                    Password
                                </th>
                                <th>
                                    Avatar
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Phone
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItems}
                        </tbody>
                    </table>
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
        getUsersRequest: () => {
            dispatch(getUsersRequest());
        },
        deleteUserRequest: (id) => {
            dispatch(deleteUserRequest(id));
        }
    }
}
export default (connect(mapStateToProps, mapDispatchToProps)) (ListUser);