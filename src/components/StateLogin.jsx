import { useState } from "react";
import Input from "./Input";
import {isEmail, isNotEmpty, hasMinLength, } from "../utils/validation"; 

export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password && hasMinLength(enteredValues.password, 6) && !isNotEmpty(enteredValues.password);

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => {
      return { ...prevValues, [identifier]: value };
    });
    setDidEdit((prevValues) => {
      return { ...prevValues, [identifier]: false };
    });
  }

  function handleInputBlur(identifier, value) {
    setDidEdit((prevValues) => {
      return { ...prevValues, [identifier]: true };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email address!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredValues.email}
          error={
            passwordIsInvalid &&
            "Please enter a password with at least 6 characters!"
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
