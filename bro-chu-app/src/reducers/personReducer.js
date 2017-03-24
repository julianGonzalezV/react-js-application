import * as types from '../actions/actionTypes';
import initialState from './initialState';
//julian commit from ubuntu

export default function personReducer(state = initialState.persons, action) {
  switch(action.type) {
    case types.LOAD_PERSONS_SUCCESS:
      console.log("ENTRA A ::personReducer 1", action.persons.length)
      return action.persons
    default:
    console.log("ENTRA A ::personReducer 2")
      return state;
  }
}
