import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios'


export default class SignUp extends Component {
    state = {};

    _getAccount = (e) => {
        let name = e.target.name;
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    _onSignup = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5050/api/users", {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                avatarUrl: this.state.avatarUrl
            }, {
                    validateStatus: (status) => {
                        return status >= 200 && status < 500
                    }
                }
            )
            .then(response => {
                console.log(response.data.success === 1)
                this.setState({ data: response.data })
                console.log("1");

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


        return (
            <div>
                <Container>
                    <h3>Sign Up</h3>
                    <Form onSubmit={this._onSignup}>
                        <FormGroup>
                            <h4>Username</h4><Input onChange={this._getAccount} name='username' type='text' placeholder='Username' />
                        </FormGroup>
                        <FormGroup>
                            <h4>PassWord</h4><Input onChange={this._getAccount} name='password' type='password' placeholder='.....' />
                        </FormGroup>
                        <FormGroup>
                            <h4>Email</h4><Input onChange={this._getAccount} name='email' type='text' placeholder='a@gmail.com' />
                        </FormGroup>
                        <FormGroup>
                            <h4>Avatar Url</h4><Input onChange={this._getAccount} name='avatarUrl' type='text' placeholder='link ảnh' />
                        </FormGroup>
                        <Button type='submit'>Đăng Kí</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}