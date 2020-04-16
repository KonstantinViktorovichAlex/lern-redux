import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import Counter from "./Counter";
import {change, minus, plus, reset, onplusvalue, asyncplusvalue} from "./redux/actions/actions";

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className = 'one-block'>
                    <h1>Counter {this.props.counter}</h1>
                    <button onClick={this.props.onMinus}>MINUS</button>
                    <button onClick={this.props.onReset}>RESET</button>
                    <button onClick={this.props.onPlus}>PLUS</button>
                    <div>
                        <button onClick={()=>{this.props.onPlusValue(100)}}>добавить 100</button>
                        <button onClick={()=>{this.props.asyncPlusValue(100)}}>асинхронно добавить 100</button>
                    </div>
                </div>
                <div className = 'two-block'>
                    <h3>{this.props.text}</h3>
                    <input type="text" placeholder = 'enter text'
                           onChange={(event)=>{this.props.change(event.target.value)}}
                    />
                </div>
                <Counter/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter,
        text: state.text
    }
}
function mapDispathToProps(dispatch) {
    return {
        onPlus: () => dispatch(plus()),
        onPlusValue: (value) => dispatch(onplusvalue(value)),
        onMinus: () => dispatch(minus()),
        onReset: () => dispatch(reset()),
        change: (value) => dispatch(change(value)),
        asyncPlusValue: (value) => dispatch(asyncplusvalue(value))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App);
