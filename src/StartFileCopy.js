import React, { Component } from "react";

import CounterCopy from "./CounterCopy";
import Total from "./Total";

// state data for 3 counters
// const data = [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]; moved data array to the component state (ex 2)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, value: 0 }, 
        { id: 2, value: 0 }, 
        { id: 3, value: 0 }, 
        { id: 4, value: 0 }] //fourth counter rendered (ex 3)
    }
  }; //state of counters, initiated as "data" array, then "data" array was moved to the component state (ex 2)

  //checks the counter id and updates the value (in counter state) of the counter if id matches (ex 5optional)
  handleChange = (counterId, changeValue) => {
    this.setState(prevState => ({
     data: prevState.data.map(counter => 
        counter.id === counterId
        ? {...counter, value: counter.value + changeValue}
        : counter
      )
    }))
  };

  render() {
    const {data} = this.state
    
    return (
      <div>
        {data.map(counter => (
          <CounterCopy 
            key={counter.id} 
            currentValue={counter.value}
            onChange = {changeValue => this.handleChange(counter.id, changeValue)}/> //substituted onDecrement and onIncrement with onChange (ex 5 optional)
        ))}
        <Total data={this.state.data} />
      </div>
    );
  }
};

export default App;
