import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  }

  return (
    <div>
      <h2>Hello, welcome to our website!</h2>
      {!changeText && <p>We are glad to have you here.</p>}
      {changeText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
