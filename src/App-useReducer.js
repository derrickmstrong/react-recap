import { Fragment, useReducer } from "react";
import "./App.css";

function App() {
  // useReducer takes in two paramaters, 1) the reducer function ie. the function that we would typically use in the onChange or onClick called handleChange or handleClick 2) the initialState
  // give the name of the function as the setChecked variable in this case 'toggle' and Tada!

  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <Fragment>
      <input type="checkbox" value={checked} onChange={toggle} />{" "}
      <p>{checked ? "Checked" : "Not Checked"}</p>
    </Fragment>
  );
}

export default App;

/**
 * Functions
 **/

/**
 * Variables
 **/
