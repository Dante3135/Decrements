import React, { Component } from "react";
import PropTypes from "prop-types";

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.start };
  }

  handleIncrement = (state) => {
    this.setState({ number: state.number + 1 });
  };

  handleDecrement = (state) => {
    if (state.number === 0) {
      return alert("Cannot be less than zero!");
    }
    this.setState({ number: state.number - 1 });
  };

  render() {
    return (
      <div>
        {this.state.number}{" "}
        <button onClick={() => this.handleIncrement(this.state)}>
          increment
        </button>
        <button onClick={() => this.handleDecrement(this.state)}>
          decrement
        </button>
      </div>
    );
  }
}

Numbers.propTypes = {
  start: PropTypes.number.isRequired,
};

export default Numbers;