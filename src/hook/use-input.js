import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const valueIsValid = validateValue(enteredValue);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueChangeHandler,
  };
};

export default useInput;
