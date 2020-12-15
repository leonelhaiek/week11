import React, { Component } from 'react';
import propTypes from 'prop-types';

class BuildingsList extends Component {
  render() {
    return(
    <div>
    <h1 style={sth}>Buildings </h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Address</th>
          <th>Boilers</th>
          <th>Full Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
      {this.props.buildingsList.map ((buildings)=> (
        <tr>
          <td>{buildings.id}</td>
          <td>{buildings.address}</td>
          <td>{buildings.boilers}</td>
          <td>{buildings.fullName}</td>
          <td>{buildings.phone}</td>
          <td><img className= "actions" src="images/pencil.png" alt="Edit icon"></img>{"   "}<img className="actions" src="images/trash-can.png" alt="Delete icon"></img></td>
        </tr>
      ))}
      </tbody>
    </table>
    </div>
    )
  }
}
const sth={
  backgroundColor: "#232f3e",
}


BuildingsList.propTypes = {
  buildingsList: propTypes.array.isRequired
}
export default BuildingsList;

