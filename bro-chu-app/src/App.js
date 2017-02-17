import React from 'react';
import './App.css';
import PersonList from './components/person/js/PersonList';
const App = () => {



  let persons = [
  { id: 1, fullName: "julian", title: "CEO", department: "Business", pic: "1.jpg" },
  { id: 2, fullName: "paola", title: "CMO", department: "Marketing", pic: "2.jpg" },
  { id: 3, fullName: "clara", title: "CFO", department: "Business", pic: "3.png" },
  { id: 4, fullName: "jose", title: "CTO", department: "Engineering", pic: "4.png" },
  { id: 5, fullName: "sandra", title: "Art Director", department: "Marketing", pic: "1.jpg" },
  { id: 6, fullName: "mita", title: "Frontend Dev", department: "Engineering", pic: "2.jpg" },
  { id: 7, fullName: "karina", title: "Digital Strategist", department: "Marketing", pic: "3.png" },
  { id: 8, fullName: "lady", title: "Backend Dev", department: "Engineering", pic: "4.png" },
  { id: 9, fullName: "juanes", title: "DevOps Engineer", department: "Engineering", pic: "1.jpg" },

]

//v1.1 USANDO ComponenTE
return (<div className="App">
           <PersonList list = { persons }  />
         </div>
               );

};
export default App;
