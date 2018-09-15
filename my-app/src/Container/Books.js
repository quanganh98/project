import React, { Component } from 'react'
import Table from '../Components/Table'
import NavBar from '../Components/NavBar'
import { Container } from 'reactstrap'

export default class Books extends Component {


  render() {
    // console.log(this.props.tables)

    return (
      <div>
        <NavBar />
        <div className='backround'>
          <Container>
            <div className="card-columns">
              <Table tables={this.props.tables} />
              <Table tables={this.props.tables} />
              <Table tables={this.props.tables} />
              <Table tables={this.props.tables} />
              <Table tables={this.props.tables} />
            </div>
          </Container>
        </div>
      </div>
    )
  }
}