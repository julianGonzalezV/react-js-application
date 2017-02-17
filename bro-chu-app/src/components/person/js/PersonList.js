import React, { Component } from 'react';
import PersonRow from './PersonRow'

class PersonList extends Component {

 render() {
   return (
     <ul className="media-list">
       {
         this.props.list.map((person) => {
           return <PersonRow key={ person.id }
                               name={ person.fullName }
                               picture={ person.pic }
                               title={ person.title }
                               department={ person.department } />
         })
       }
     </ul>
   );
 }
}

export default PersonList
