import React from 'react';
import userReducer from '../reducers/userReducer';

const initialState = {
  users: {
    isLoaded: false,
    users: [],
    filter: {
      strValue: '',
    },
  },
};

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

const reducer = combineReducers({
  users: userReducer,
});

const AppContext = React.createContext(null);

export { AppContext, reducer, initialState };
