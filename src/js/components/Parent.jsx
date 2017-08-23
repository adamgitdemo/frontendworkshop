import React from 'react';
import Child from './Child';
import '../../css/main.scss';

class Parent extends React.Component {

    constructor() {
        super();
        this.state = {
            cars: []
        }
    }

    update = (cars) => {
        this.setState({
            cars: cars
        });
    }

    render() {
        const cars = this.state.cars.map((car, index) => {
            return <span>{index}:&nbsp;{car}&nbsp;</span>;
        })

        return (
            <div className="parentComponent">
                <Child callback={this.update}/>
                <h4>My cars:</h4>
                <div>{cars}</div>
            </div>
        )
    }
}

export default Parent;
