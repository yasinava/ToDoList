import React, { useState, useContext } from "react";
import styles from "./styles/List.module.css";
import { DataContext } from "./context/DataContextProvider";
import addLogo from "./icon/add-svgrepo-com (1).svg";
import ListUnComplete from "./ListUnComplete";
import ListComplete from "./ListComplete";

const List = () => {
  const { state, dispatch } = useContext(DataContext);
  const [click, setClick] = useState({
    Add: false,
    validate: false,
  });
  const [sendData, setSendData] = useState({
    name: "",
  });
  const AddHandler = () => {
    if (sendData.name) {
      dispatch({ type: "ADDITEMS", payload: sendData });
    } else {
      setClick({
        Add: true,
        validate: true,
      });
    }
  };
  const focusHandler = () => {
    setClick({ Add: true, validate: false });
  };
  console.log(state);
  return (
    <div className={click.Add ? styles.blackContainer : styles.container}>
      <div className={styles.header}>
        <h3 className="m-4 font-weight-bold">To Do List</h3>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.mapDiv}>
          <h5
            className={
              !state.unComplete.length ? "mb-5 mt-2 ml-4 " : " mt-2 mb-3 ml-4"
            }
          >
            unComplete{" "}
            <span className="badge badge-danger">
              {state.unComplete.length}
            </span>
          </h5>
          <div>
            {state.unComplete.map((item) => (
              <ListUnComplete key={item.name} data={item} />
            ))}
          </div>
        </div>
        <div className={styles.mapDiv}>
          <h5 className="mt-3 mb-3 ml-4">
            complete{" "}
            <span className="badge badge-success">{state.complete.length}</span>
          </h5>
          <div>
            {state.complete.map((item) => (
              <ListComplete key={item.name} data={item} />
            ))}
          </div>
        </div>
      </div>
      {click.Add && (
        <div className={styles.Add}>
          <h5 className="mt-3">Add ...</h5>
          <input
            className={
              click.validate
                ? "input-group border bg-light rounded-lg w-75 shadow-sm"
                : "input-group border-danger rounded-lg w-75 shadow-sm"
            }
            type="text"
            name="name"
            value={sendData.name}
            onChange={(event) => setSendData({ name: event.target.value })}
            onFocus={focusHandler}
          />
          <button onClick={AddHandler} className="btn btn-success w-75 my-3">
            Add
          </button>
          <button
            onClick={() => setClick({ Add: false })}
            className="btn btn-danger w-75 mb-3"
          >
            Cancel
          </button>
        </div>
      )}
      <div className={styles.footer}>
        <button
          className="btn m-4 w-25 mb-5"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Clear
        </button>
        <button
          className="btn m-4 w-25 mb-5"
          onClick={() => setClick({ Add: true })}
        >
          <img src={addLogo} alt="add" />
        </button>
      </div>
    </div>
  );
};

export default List;
