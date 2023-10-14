import React, { createContext, useContext, useReducer } from "react";

//prepares dataLyer
export const StateContext = createContext();

//Wrap app and provide the dataLayer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//pull info from dataLayer 
export const useStateValue = () => useContext(StateContext); 
