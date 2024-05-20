import React, { Component } from "react";
import Counter from "./Counter";
import Total from "./Total";
import Logo from "./assets/corintis.png"

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

  //checks the counter id and updates the value (in counter state) of the counter if id matches (ex 1)
  handleDecrement = (counterId, decrementValue) => {
    this.setState(prevState => ({
     data: prevState.data.map(counter => 
        counter.id === counterId
        ? {...counter, value: counter.value - decrementValue}
        : counter
      )
    }))
  };
  
  //same, with increment (ex 1)
  handleIncrement = (counterId, incrementValue) => {
    this.setState(prevState => ({
    data: prevState.data.map(counter => 
      counter.id === counterId
      ? {...counter, value: counter.value + incrementValue}
      : counter
     ) }))
  };

  render() {
    const {data} = this.state

    return (
      <>
      <div className="d-flex flex-column justify-content-center align-items-center my-4">
        <img src={Logo} alt="Corintis logo"/>
        <h3 className="">counter</h3>
      </div>
      <div className='counterwrap'>
        {data.map(counter => (
          <Counter 
            key={counter.id} 
            currentValue={counter.value}
            onDecrement={decrementValue => this.handleDecrement(counter.id, decrementValue)} 
            onIncrement={incrementValue=> this.handleIncrement(counter.id, incrementValue)}/>
        ))}
        <Total data={data}/>
      </div>
      </>
    );
  }
}
export default App;
