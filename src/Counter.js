import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'; // Import PropTypes

// Counter Component
export default class Counter extends Component {
    render() {
      const {currentValue, onIncrement, onDecrement} = this.props;
        
      return (
  //most synthetic code for this project (which does not require responsiveness)
        <div className="counter d-flex justify-content-center align-items-center my-4">
          <Button variant="custom-minus" className="rounded-circle" onClick={()=> onDecrement(1)}>
            <p className="m-0 fa-solid text-white">−</p>
          </Button>

          <div className="number-container text-center">
            <b>{currentValue}</b>
          </div>

          <Button variant="custom-plus" className="rounded-circle" onClick={()=>onIncrement(1)}>
          <p className="m-0 fa-solid text-white">+</p>
          </Button>
        </div>

      
  //more complete code for responsiveness

      // <div className="container d-flex justify-content-center p-0">
      //   <div className="row d-flex align-items-center my-3 mx-0">
      //     <div className="col-4 d-flex justify-content-end">
      //     <Button variant="custom-minus" className="rounded-circle" onClick={()=> onDecrement(1)}>
      //       <p className="m-0 fa-solid text-white">−</p>
      //     </Button>
      //     </div>

      //     <div className="number-container col-4 text-center">
      //       <b>{currentValue}</b>
      //     </div>

      //     <div className="col-4 d-flex justify-content-start">
      //     <Button variant="custom-plus" className="rounded-circle" onClick={()=>onIncrement(1)}>
      //     <p className="m-0 fa-solid text-white">+</p>
      //     </Button>
      //     </div>
      //   </div>
      // </div>
      );
    }
  }

 // Define propTypes for your component
 Counter.propTypes = {
  currentValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired

}