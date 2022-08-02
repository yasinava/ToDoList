import React, { createContext, useReducer } from "react";

const initialState = {
  unComplete: [],
  complete: [],
};

const reduce = (state, action) => {
  switch (action.type) {
    case "ADDITEMS":
      const newComplete = state.complete.filter(
        (item) => item.name !== action.payload.name
      );
      if (!state.unComplete.find((item) => item.name === action.payload.name)) {
        state.unComplete.push({
          ...action.payload,
        });
      } else {
        alert("You have already added");
      }
      return {
        ...state,
        unComplete: [...state.unComplete],
        complete: [...newComplete],
      };
    case "REMOVE":
      const removeUnComplete = state.unComplete.filter(
        (item) => item.name !== action.payload.name
      );
      const removeComplete = state.complete.filter(
        (item) => item.name !== action.payload.name
      );
      return {
        unComplete: [...removeUnComplete],
        complete: [...removeComplete],
      };
    case "COMPLETE":
      if (!state.complete.find((item) => item.name === action.payload.name)) {
        state.complete.push({
          ...action.payload,
        });
      }
      const newUnComplete = state.unComplete.filter(
        (item) => item.name !== action.payload.name
      );
      return {
        ...state,
        complete: [...state.complete],
        unComplete: [...newUnComplete],
      };
    case "CLEAR":
      return {
        unComplete: [],
        complete: [],
      };
    default:
      return state;
  }
};

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
