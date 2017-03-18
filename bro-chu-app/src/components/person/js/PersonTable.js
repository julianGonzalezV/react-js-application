import React, { Component } from 'react';
import PersonTableRow from './PersonTableRow'
import PersonTableHeader from './PersonTableHeader'
class PersonTable extends Component {

  constructor(props) {
    super(props);
    this.filterTableById = this.filterTableById.bind(this);
    this.state = {tableState:[], filtro1:''};
  }

  renderTableSt(){
      const filteredResult = []
      if(this.state.filtro1===''){
        this.filteredResult = this.state.tableState
      }else{
        const filterAux = this.state.filtro1
        this.filteredResult = this.state.tableState.filter(person => {
          return person.id.toString().includes(filterAux.toString());
        })
      }

      return this.filteredResult.map(person => (
        <PersonTableRow id={ person.id }
                            name={ person.name }
                            age={ person.age } />
                          ));
  }


  componentDidMount() {
    console.log('componentDidMount'+this.props.tableList.length )
    this.setState({ tableState: this.props.tableList });
  }


  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps:: '+nextProps.tableList.length )
    this.setState({ tableState: nextProps.tableList });
  }

/**
*Function to filter the table by id
*/
filterTableById(filterId) {
  this.setState({ filtro1: filterId });
}


  render() {
      console.log('Person table render')
      return(
		  <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h3 className="sub-header">Listado de Personas</h3>
                 <div className="table-responsive">
                 {/* Note la manera en que se le pasan  propiedades adicionales del componente
                   que lo llama, para que tenga acceso a este recurso, en este caso una funcion */}
                   <table className="table table-striped">
                     <PersonTableHeader  filterTableById={this.filterTableById}/>
                     <tbody>
                       {this.renderTableSt()}
                     </tbody>
                   </table>
                 </div>
              </div>
      );
  }
}
export default PersonTable
