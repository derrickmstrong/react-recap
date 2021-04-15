import { Fragment, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("Happy");

  const handleEmotion = (myEmotion) => {
    const emotionList = [
      "Happy",
      "Frustrated",
      "Enthused",
      "Amused",
      "Confused",
    ];

    const randNum = Math.floor(Math.random() * emotionList.length);

    const randomEmotion = emotionList[randNum];

    return myEmotion === "random"
      ? setEmotion(`${randomEmotion}`)
      : setEmotion(`${myEmotion}`);
  };

  useEffect(() => {
    console.log(`It's ${emotion} around here`)
    return () => {
    }
  }, [emotion])

  return (
    <Fragment>
      <h1>Current emotion is: {emotion}</h1>
      <button onClick={() => handleEmotion("Happy")}>Happy</button>
      <button onClick={() => handleEmotion("Sad")}>Sad</button>
      <button onClick={() => handleEmotion("Excited")}>Excited</button>
      <button onClick={() => handleEmotion("random")}>Random</button>
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
