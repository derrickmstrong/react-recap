import { Fragment, useState, useEffect } from "react";
import "./App.css";

function App({ login }) {
  // https://api.github.com/users/derrickmstrong

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData);
  }, [login]);

  return (
    <Fragment>
      {data ? (
        <>
          <img
            src={data.avatar_url}
            height={150}
            alt={data.login}
            title={data.login}
          />
          <h1>{data.name}</h1>
          <h3>{data.location}</h3>
        </>
      ) : (
        "No User Available"
      )}
    </Fragment>
  );
}

export default App;
