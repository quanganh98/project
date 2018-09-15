import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios'
export default class Login extends Component {
    state = {};

    _getAccount = (e) => {
        let name = e.target.name;
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }
    
    _onLogin = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5050/api/auth/login", {
                username: this.state.username,
                password: this.state.password
            }, {
                    validateStatus: (status) => {
                        return status >= 200 && status < 500
                    }
                }
            )
            .then(response => {
                // console.log(response.data.success === 1)
                this.setState({ data: response.data })
                // console.log(this.props)
                if (response.data.success === 1) {
                    this.props.history.push("/")
                }
                else {
                    alert("SAI TAI KHOAN")
                }
            }
            )
            .catch(err => console.error(err))
    }
    render() {
        console.log(this.props)
        return (
            <div className='Login '>
                <Container>
                    <div className='border border-right-0 border-left-0'>
                        <Form onSubmit={this._onLogin}>
                            <FormGroup>
                                <h4>Username</h4><Input onChange={this._getAccount} name='username' type='text' placeholder='Username' />
                                <h4>Password</h4><Input onChange={this._getAccount} name='password' type='password' placeholder='Password' />
                            </FormGroup>
                            <Button type='submit' color='danger' >Login</Button>
                        </Form>
                    </div>
                </Container>
            </div>
        )
    }
}