import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>Counter {this.props.counter}</h1>
                <button onClick={this.props.onMinus}>MINUS</button>
                <button onClick={this.props.onPlus}>PLUS</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}
function mapDispathToProps(dispatch) {
    return {
        onPlus: () => dispatch({type: 'PLUS'}),
        onMinus: () => dispatch({type: 'MINUS'})
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App);
