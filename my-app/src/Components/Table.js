import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const table = {
    width: '15rem',
}

export default class Table extends Component {
    state = {
        color: [
            'danger',
            'success'
        ],
        status: [
            'Booked',
            'Can Book',
        ],
    };
    // componentDidMount() {
    //     this.setState({
    //         data: color
    //     })
    //     console.log(this.state)
    // }

    _handleClick = (e) => {
        let getColor = e.target.color
        let temp;
        this.setState({
            color: this.state.color.reverse(),
            status: this.state.status.reverse()
        })
        // console.log(this.state)
    }

    // onClick={this._handleClick} color={this.state.color.success}
    render() {
        
        const count = _.get(this.props, 'tables.tables.tableFound');
        console.log(count);
        return (
            <div className="card">
                <img className="card-img-top" src={_.get(this.props, `tables.tables.tableFound[0].url`)} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Bàn Số : {_.get(this.props, 'tables.tables.tableFound[0].tableNumber')}</h5>
                    {/* <h5 className="card-title">Status : {this.state.status[0]}</h5> */}
                    <h5 className="card-title">Price : {_.get(this.props, 'tables.tables.tableFound[0].price')}</h5>
                    <Button onClick={this._handleClick} color={this.state.color[0]} >{this.state.status[0]}</Button>
                    <Link to={`/detail/`}><h5>view detail</h5></Link>
                </div>
            </div>
        )
    }


}

