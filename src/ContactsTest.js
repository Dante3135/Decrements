import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactsTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeMobile = this.handleChangeName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
  
    handleChangeName(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      let enternedName = this.state.value;
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChangeName} />
          </label>
          <br></br>
          <label>
            Mobile:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Work:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Workplace:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default ContactsTest;