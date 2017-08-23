import React from 'react';

class Panel extends React.Component {

    render() {
        return (
            <div className="myClass">
                <h2>{this.props.header}</h2>
                <hr/>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Panel;
