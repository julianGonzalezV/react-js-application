import React, { Component } from 'react';//para tener acceso a la clase Component
import '../css/PersonAvatar.css';

class PersonAvatar extends Component{
  constructor(props) {
  super(props);
  //this.picture = 'images.png'
}

    render() {
      return (
      <figure className="media-left">
          {/*<img src={'./images/images.png'}/>*/}
        <img className="media-object" width="64px" src={`./images/${this.props.picture}`}/>
      </figure>
    );
  }

}
export default PersonAvatar;
