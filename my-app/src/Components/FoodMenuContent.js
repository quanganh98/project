import React, { Component } from 'react';
import { Container, Button } from 'reactstrap'

export default class FoodMenuContent extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.dataRecived.imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Name : {this.props.dataRecived.name}</h5>
                    <h5 className="card-title">Price : {this.props.dataRecived.price}</h5>
                </div>
                <div className="col-2 offset-4 text-center">
                    <Button color='success' >Mua Hang</Button>
                </div>
            </div>
        );
    }
}