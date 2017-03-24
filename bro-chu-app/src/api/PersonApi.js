class PersonApi {
  static getAllPersons() {
    console.log("PersonApi ENTRA A ::getAllPersons aPI")
    return fetch('http://localhost:9000/ejercicio/personas').then(response => {
      console.log("PersonApi ENTRA A ::getAllPersons 1")
      return response.json();
    }).catch(error => {
          console.log("PersonApi ENTRA A ::getAllPersons 2", error)
      return error;
    });
  }
}




export default PersonApi;
