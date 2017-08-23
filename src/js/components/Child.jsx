import React from 'react';
import {randomCar} from '../util/random';
import {newCar, deleteCars} from '../actions/carActions';
import { connect } from 'react-redux';

class Child extends React.Component {

    render() {
        const cars = this.props.cars.map((car, index) => {
            return <span>{index}:&nbsp;{car}&nbsp;</span>;
        })

        return(
            <div className="childComponent">
                <h4>My cars:</h4>
                <div>{cars}</div>
                <button onClick={this.props.addCar}>Get a car</button>
                <button onClick={this.props.deleteCars}>Sell cars</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.CarsReducer.cars
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: () => dispatch(newCar(randomCar())),
        deleteCars: () => dispatch(deleteCars())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Child);
