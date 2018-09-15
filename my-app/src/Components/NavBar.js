import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to={"/"}><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/menu"}><a className="nav-link" href="#">Menu Food</a></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <Link to='/signup'><Button color='danger'>Đăng kí</Button></Link>
                            <Link to='/xxx'><Button color='success' >Đăng nhập</Button></Link>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
