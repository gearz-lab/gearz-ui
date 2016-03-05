import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../sass/Counter.module.scss';

class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <div className="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className="counter">
          {counter}
        </div>
        <div className="btnGroup">
          <button className="btn" onClick={increment}>
            <i className="fa fa-plus"></i>
          </button>
          <button className="btn" onClick={decrement}>
            <i className="fa fa-minus"></i>
          </button>
          <button className="btn" onClick={incrementIfOdd}>odd</button>
          <button className="btn" onClick={() => incrementAsync()}>async</button>
        </div>
      </div>
    );
  }
}

export default Counter;
