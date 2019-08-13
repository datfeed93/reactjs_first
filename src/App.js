import React from 'react';
//import logo from './logo.svg';
import './assets/scss/style.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./containers/Login";
import ChangePassword from "./containers/ChangePassword";
import ListUser from "./containers/ListUser";
import AddUser from "./containers/AddUser";
function App() {
    return (
        <div className="App">
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-sm">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/change-password">Change Password</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/list-user">List User</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/login" exact component={Login} />
                    <Route path="/change-password" exact component={ChangePassword} />
                    <Route path="/list-user" exact component={ListUser} />
                    <Route path="/add-user" exact component={AddUser} />
                </div>
            </Router>
        </div>
    );
}

export default App;
