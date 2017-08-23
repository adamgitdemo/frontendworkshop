import React from 'react';
import {randomCar} from '../util/random';

class Child extends React.Component {

    constructor() {
        super();
        this.state = {
            cars: []
        }
    }

    addCar = () => {
        var newCars = [...this.state.cars, randomCar()];

        this.setState({
           cars: newCars
        });

        this.props.callback(newCars);
    }

    deleteCars = () => {
        this.setState({
            cars: []
        });

        this.props.callback([]);
    }

    render() {
        const cars = this.state.cars.map((car, index) => {
            return <span>{index}:&nbsp;{car}&nbsp;</span>;
        })

        return(
            <div className="childComponent">
                <h4>My cars:</h4>
                <div>{cars}</div>
                <button onClick={this.addCar}>Get a car</button>
                <button onClick={this.deleteCars}>Sell cars</button>
            </div>
        )
    }
}

export default Child;
