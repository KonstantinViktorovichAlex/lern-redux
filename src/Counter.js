import React, {Component} from "react";
import {connect} from 'react-redux'
import {changenumber} from "./redux/actions/actions";

class Counter extends Component{

    render() {
        return (
            <div style={{padding: 20, border: '2px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <button onClick={() => {this.props.changeNumder(1)}}>ADD</button>
                <button onClick={() => {this.props.changeNumder(-1)}}>SUB</button>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        counter: state.counter2.counter2
    }

}
function mapDispathToProps(dispatch) {
    return {
        changeNumder: (value) => dispatch(changenumber(value))
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Counter)