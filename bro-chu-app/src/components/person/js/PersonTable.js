
import React, {Component,PropTypes} from 'react';
import PersonTableRow from './PersonTableRow'
import PersonTableHeader from './PersonTableHeader'


class PersonTable extends Component {

  constructor(props) {
    super(props);
    this.state = {currentlyDisplayed:this.props.persons};

    //bindings de funciones
    this.filterTableById = this.filterTableById.bind(this);
  }


  //Function to filter the table by id
  filterTableById(filterId) {
    let filteredResult = this.props.persons.filter(person => {
      return person.id.toString().includes(filterId.toString());
    })
    this.setState({ currentlyDisplayed:filteredResult});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentlyDisplayed:nextProps.persons});
  }


  render() {
      console.log('Person table render')
      return(
		  <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h3 className="sub-header">Listado de Personas</h3>
                 <div className="table-responsive">
                   <table className="table table-striped">
                     <PersonTableHeader  filterTableById={this.filterTableById}/>
                     <tbody>
                     {
                       this.state.currentlyDisplayed.map(person => (
                         <PersonTableRow key={person.id}  id={ person.id }
                                             name={ person.name }
                                             age={ person.age } />
                                           ))
                     }
                     </tbody>
                   </table>
                 </div>
              </div>
      );
  }
}


PersonTable.propTypes = {
  persons: PropTypes.array.isRequired
};

export default PersonTable;
