import personApi from '../api/PersonApi';
import * as types from './actionTypes';

export function loadPersons() {
  console.log("PersonAction ENTRA A ::loadPersons()")
  return function(dispatch) {
    return personApi.getAllPersons().then(persons => {
      dispatch(loadPersonsSuccess(persons));
    }).catch(error => {
      throw(error);
    });
  };
}


export function loadPersonsSuccess(persons) {
    console.log("PersonAction ENTRA A ::loadPersonsSuccess()")
  return {type: types.LOAD_PERSONS_SUCCESS, persons};
}


export function filterByColumn(persons) {
    console.log("filtrando por columna")
  return {type: types.LOAD_PERSONS_SUCCESS, persons};
}
