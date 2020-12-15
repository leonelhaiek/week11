import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    id: " ",
    address: " ",
    boilers: " ",
    fullName:" ",
    phone:" ",
  }

  onSubmit = (e) => {
    e.preventDefault ();
    this.props.form(this.state);
    this.setState({ name: " "});
  }
  onChange = (e) => this.setState ({[e.target.name]: e.target.value});

  render() {
    return (
      <div>
        <p>New Building</p>
        <form onSubmit ={this.onSubmit}>
          <div className ="input-group">
            <label>Id building</label>
            <input
              type="text"
              name= "Id"
              value ={this.state.id}
              onChange={this.onChange}>
            </input>
          </div>
          <div className ="input-group">
            <label>Address</label>
            <input
              type="text"
              name= "address"
              value ={this.state.address}
              onChange={this.onChange}>
            </input>
          </div>
          <div className ="input-group">
            <label>boiler</label>
            <input
              type="text"
              name= "boiler"
              value ={this.state.boiler}
              onChange={this.onChange}>
            </input>
          </div>
          <div className ="input-group">
            <label>fullName</label>
            <input
              type="text"
              name= "fullname"
              value ={this.state.fullName}
              onChange={this.onChange}>
            </input>
          </div>
          <div className ="input-group">
            <label>Phone</label>
            <input
              type="text"
              name= "phone"
              value ={this.state.phone}
              onChange={this.onChange}>
            </input>
          </div>
          <input type="submit"name="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Form;
