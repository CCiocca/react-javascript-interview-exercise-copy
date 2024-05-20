import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'; // Import PropTypes

// Counter Component
export default class Counter extends Component {
    render() {
      const { currentValue, onChange } = this.props;
        
      return (
        <div className="counter">
          <b>{currentValue}</b>
          <div className="counter-controls">
            <Button variant="danger" className="mr-2" onClick={()=> onChange(-1)}>
              -
            </Button> {/* updated onchange parameter (ex 5 optional)*/}
            <Button variant="success" className="mr-2" onClick={()=> onChange(1)}>
              +
            </Button> {/* updated onchange parameter (ex 5 optional)*/}
          </div>
        </div>
      );
    }
  };

 // Define propTypes for your component
 Counter.propTypes = {
  currentValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};