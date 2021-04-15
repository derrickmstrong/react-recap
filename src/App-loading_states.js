import { Fragment, useState, useEffect } from "react";
import "./App.css";

function App({ login }) {
  // https://api.github.com/users/derrickmstrong

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return <h2>No data</h2>;

  return (
    <Fragment>
      <img
        src={data.avatar_url}
        height={150}
        alt={data.login}
        title={data.login}
      />
      <h1>{data.name}</h1>
      <h3>{data.location}</h3>
    </Fragment>
  );
}

export default App;
