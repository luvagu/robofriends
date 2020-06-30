import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL
} from './constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
}); // wrapping a return functionn with () returns it automatically

//  {
//     console.log('redux action setSearchField', text);
//     return {
//         type: CHANGE_SEARCH_FIELD,
//         payload: text
//     }
// } // old school retun method

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: err }))
} 