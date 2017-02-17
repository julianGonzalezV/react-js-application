import React, { Component } from 'react';
import PersonaAvatar from './PersonAvatar'

class PersonRow extends Component {

  render() {
    return(
      <li className="media">
        <PersonaAvatar picture={this.props.picture}/>
        <div className="media-body">
          <h4>{this.props.name}</h4>
          <p>
            {this.props.title} &nbsp;
            <span className="label label-info">{this.props.department}</span>
          </p>
        </div>
        <hr/>
      </li>
    );
  }
}

export default PersonRow
