import React, { useReducer } from 'react';
import { AppContext, reducer, initialState } from './context/AppContext';
import CrudPage from './components/crud';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <CrudPage />
    </AppContext.Provider>
  );
}

export default App;
