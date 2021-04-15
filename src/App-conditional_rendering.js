import { Fragment } from "react";
import "./App.css";

function SecretComponent() {
  return <h1>Secret information for authorizes users only</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>;
}

function App({ authorized }) {
  return (
    <Fragment>
      {authorized ? <SecretComponent /> : <RegularComponent />}
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
