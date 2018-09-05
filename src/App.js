import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters'
import Navbar from './components/navbar'

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 1},
      {id: 3, value: 2},
      {id: 4, value: 3}
    ]
  }

  constructor(props){
    super(props);
    console.log("app constructor");
  }

  componentDidMount(){
    console.log("app mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map( c => {
      c.value = 0;
      return c
    })
    this.setState({counters})
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });
  }

  handleDelete = counterid => {
    console.log(counterid);
    const counter = this.state.counters.filter( c => c.id != counterid );
    this.setState({counters: counter})
  }
  render() {
    console.log("app rendered");
    return (
      <div>
        <Navbar totalCounters={ this.state.counters.filter( c => c.value > 0).length } />
        <main className="container">
          <Counters onReset={this.handleReset} onDelete={this.handleDelete} counters={this.state.counters} onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement} />
        </main>
      </div>
    );
  }
}

export default App;
