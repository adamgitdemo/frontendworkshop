import React from 'react';
import Child from './Child';
import '../../css/main.scss';
import { connect } from 'react-redux';

class Parent extends React.Component {

    constructor() {
        super();
        this.state = {
            cars: []
        }
    }

    render() {
        const cars = this.props.cars.map((car, index) => {
            return <span>{index}:&nbsp;{car}&nbsp;</span>;
        })

        return (
            <div className="parentComponent">
                <Child/>
                <h4>My cars:</h4>
                <div>{cars}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.CarsReducer.cars
    }
}

export default connect(mapStateToProps)(Parent);
