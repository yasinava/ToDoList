import React, { useContext } from "react";
import styles from "./styles/Complete.module.css";
import { DataContext } from "./context/DataContextProvider";
const ListComplete = ({ data }) => {
  const { state, dispatch } = useContext(DataContext);
  return (
    <div className={styles.completeContainer}>
      <div className={styles.btn2}>
        <button
          className="btn rounded-circle btn-light ml-4"
          onClick={() => {
            dispatch({ type: "ADDITEMS", payload: data });
          }}
        ></button>
        <h5 className="ml-3">{data.name}</h5>
      </div>
      <button
        type="button"
        className="close ml-1"
        onClick={() => dispatch({ type: "REMOVE", payload: data })}
      >
        <span>&times;</span>
      </button>
    </div>
  );
};

export default ListComplete;
