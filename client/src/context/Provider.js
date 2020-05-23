import React, { useReducer } from "react";
import { SET_LOADING } from "./type";
import Context from "./Context";
import Reducer from "./Reducer";

// maintain state and dispatch action
const Provider = ({ children }) => {
  const defaultState = {
    loading: false,
  };
  const [state, dispatch] = useReducer(Reducer, defaultState);
  //....
  ///// Add api calls and other functions here

  const loading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };
  // call in the component where you wannna render
  loading();
  const value = {
    loading: state.loading,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
