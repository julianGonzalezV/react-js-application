import React, { Component } from 'react';
class PersonTableRow extends Component {

  
  render() {
    return(
      <tr>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.age}</td>
      </tr>
    );
  }
}

export default PersonTableRow
