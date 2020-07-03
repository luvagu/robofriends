import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 1000
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        if (this.state.count !== nextState) {
            return true;
        }
        return false;
    }

    updateCount = () => {
        this.setState(state => {
            return { count: this.state.count + 1 }
        })
    }

    render() {
        console.log('CounterButton');
        return (
            <button style={{color: this.props.color}} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;