import React, { Component } from 'react';
import axios from 'axios'
import { API_ROOT } from '../statics';
import FoodMenuContent from './FoodMenuContent';
import { Container } from 'reactstrap'
import NavBar from './NavBar';



export default class FoodMenu extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios
            .get(`${API_ROOT}/menu/`)
            .then(res => {
                console.log(res.data.menuFound)
                this.setState({
                    data: res.data.menuFound
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const allFood = this.state.data.map(dataSent => <FoodMenuContent key={dataSent._id} dataRecived={dataSent} />)
        return (
            <div className='backround'>
                <NavBar />
                <div className="menufood">
                    <Container>
                        <div className="card-columns">
                            {allFood}
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}
