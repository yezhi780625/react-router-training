// import { combineReducers } from 'redux'
import {REQUEST,RECEIVE} from './actions'

function reducer(state = {
  isFetching: false,
  lastUpdated: false,
  items: []
},action){
    console.log(action);
    switch(action.type){
        case REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.data,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

export default reducer;