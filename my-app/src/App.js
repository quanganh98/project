import React, { Component } from 'react';
import './App.css'
import Login from './Container/Login'
import Books from './Container/Books'
import SignUp from './Container/SignUp'
import Detail from './Container/Detail'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import FoodMenu from './Components/FoodMenu';

class App extends Component {
  state = {};

  componentDidMount() {
    axios
      .get("http://localhost:5050/api/tables")
      .then(res => {
        // console.log(res)
        this.setState({
          tables: res.data
        })
        console.log(this.state)
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/menu" render={(props) => {
                return <FoodMenu/>
            }} />
            <Route exact path='/' render={(props) => {
              return <Books
                {...props}
                tables={this.state}
              />
            }} />
            <Route exact path='/detail/:id' render={(props) => {
              return <Detail
                {...props}
                tables={this.state}
              />
            }} />
            <Route path='/xxx' render={(props) => {
              return <Login

                {...props}
              />
            }} />
            <Route path='/signup' render={(props) => {
              return <SignUp
                {...props}
              />
            }} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
