import React from 'react';
import { connect } from 'react-redux';
import {fetchJokes} from '../actions/jokeActions';
import '../../css/main.scss';

class Jokes extends React.Component {

    render() {
        const dimmer = <div className="dimmer"><div>LOADING...</div></div>;
        const jokes = this.props.jokes.map((joke) => {
            return <div className="joke">{joke}</div>
        });
        return(
            <div>
                <button onClick={this.props.getJokes}>Get Jokes</button>
                {this.props.loading
                    ? dimmer
                    : null
                }
                <div>{jokes}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jokes: state.JokesReducer.jokes,
        loading: state.LoadingReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getJokes: () => dispatch(fetchJokes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jokes)
