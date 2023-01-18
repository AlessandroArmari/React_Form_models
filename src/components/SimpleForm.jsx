/*FOLLOW THE NUMBER TO UNDERSTAND THE ORDER*/

import { useState } from "react";

const SimpleForm = () => {
  // +++ 2 +++
  const [enteredUserName, setEnteredUserName] = useState("");
  const enteredUserNameIsValid = enteredUserName.trim() !== "";
  // +++ 4 +++
  const nameInputChangeHandler = (event) => {
    //this function will be in an onChange
    setEnteredUserName(event.target.value); //---> once you type, change the value of {enteredUserName} to the value of the element where the event is located
    console.log(
      "You're changing the value of 'enteredUserName' to: " + enteredUserName
    );
  }; //---> IN HUMANESE---> change the value to what you type in the input form

  // +++ 6 +++
  const formSubmissionHandler = (event) => {
    event.preventDefault(); //    ---> it avoids an "old" form behaviour (if you don't do that the page will be automatically refreshed!)

    if (!enteredUserNameIsValid) {
      //---> if username is "false" (empty)
      console.log("Username mustn't be empty!");
      return;
    }
    console.log("You've submitted the value: " + enteredUserName.trim());
    setEnteredUserName("");
  };
  const usernameClasses = enteredUserNameIsValid // --->Conditional (ternary) operator
    ? "form-control"
    : "form-control invalid";

  return (
    //onSubmit is an event of input---> it's linked somehow to button and it's function
    <form onSubmit={formSubmissionHandler}>
      <div className={usernameClasses}>
        <label htmlFor="name">Username:</label>
        <input
          type="text"
          // +++ 1 +++
          value={enteredUserName}
          // +++ 3 +++
          onChange={nameInputChangeHandler}
        />
        {/* +++ 5 +++      ----->      this expression returns the <p> if TRUE  ---->   if input field is empty returns an error MESSAGE */}
        {!enteredUserNameIsValid && ( //       ---->      this js code works because this is a .jsx code--->we can "inject" a single js command right inside html code!
          <p className="error-text">Username Must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export { SimpleForm };
