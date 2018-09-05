import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onDecrement, onIncrement } = this.props
    return (
      <div>
        <button className="btn btn-primary" onClick={onReset}>reset</button>
        {counters.map( counter =>
          <Counter key={counter.id} onDelete={onDelete} counter={counter} onDecrement={onDecrement} onIncrement={onIncrement}>
          </Counter>
          )}
      </div>
    );
  }
}

export default Counters;
