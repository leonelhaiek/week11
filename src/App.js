import React, { Component } from 'react';
import './App.css';
import BuildingsList from './components/BuildingsList';
import Form from './components/Form';
import data from './data/buildings.json';

class App extends Component {
  state = {
    buildingsList: data
  }
  
  form = (name) => {
    const newBuilding = {
      name: name,
      completed: false
    }
    this.setState({buildingsList: [...this.state.buildingsList, newBuilding]})
  }

  render() {
    return (
      <div className="App">
        <BuildingsList  buildingsList={this.state.buildingsList}/>
        <Form form={this.form}/>
      </div>
    );
  }
}

export default App;
