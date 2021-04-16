// setup data layer

import React, { createContext, useContext, useReducer } from "react";

// track the basket
// this is the data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is where is where we use it inside of a component
export const useStateValue = () => useContext(StateContext);
