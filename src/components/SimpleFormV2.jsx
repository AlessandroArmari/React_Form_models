import { useState } from "react";

const SimpleFormV2 = () => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [userNameTouched, setUserNameTouched] = useState(false);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setUserNameTouched(true); //--->if I did not click the input, it behaves differently!

    if (!enteredUserNameIsValid) {
      console.log("Username not valid! Must'nt be empty!");
      return;
    }

    console.log("Date sent correctly!");
    console.log(enteredUsername); //--->Here I should've sent data to backend

    setUserNameTouched(false); //--->
    setEnteredUserName(""); //--->Here I'm setting back to default!
  };

  const enteredUserNameIsValid = enteredUsername.trim() != "";
  const usernameInputIsInvalid = !enteredUserNameIsValid && userNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const usernameClasses = usernameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <div>
      <form onSubmit={formSubmissionHandler}>
        <div className={usernameClasses}>
          <label htmlFor="name">Username</label>
          <input
            onChange={nameInputChangeHandler}
            value={enteredUsername}
            type="text"
          />

          {usernameInputIsInvalid && (
            <p className="error-text">Username MUSTN'T BE EMPTY</p>
          )}
        </div>

        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export { SimpleFormV2 };
