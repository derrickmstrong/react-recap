import { Fragment, useState, useEffect } from "react";
import "./App.css";

function App({login}) {
  // https://api.github.com/users/derrickmstrong


  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData);
  }, [login]);

  return (
    <Fragment>
      {data ? JSON.stringify(data) : "No User Available"}
    </Fragment>
  );
}

export default App;