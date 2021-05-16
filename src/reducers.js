import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from './constants';

const INITIAL_STATE = {
  searchField: ""
}

export const searchRobotsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CHANGE_SEARCH_FIELD: {
      return {...state, searchField: action.payload}
    }
    default:
      return state
  }
}

const INITIAL_STATE_ROBOTS = {
  isPending: "",
  error: false,
  robots: []
}

export const fetchRobotsReducer = (state = INITIAL_STATE_ROBOTS, action) => {
  switch(action.type){
    case REQUEST_ROBOTS_PENDING: {
      return {...state, isPending: true}
    }
    case REQUEST_ROBOTS_SUCCESS: {
      return {...state, robots: action.payload, isPending: false}
    }
    case REQUEST_ROBOTS_FAILED: {
      return {...state, isPending: false, error: action.payload}
    }

  default:
    return state
  }
}