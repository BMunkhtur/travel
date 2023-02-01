import React from "react";
import { useState } from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const Auth = ({ handleClose, setIsLogged }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      {isSignIn ? (
        <SignIn
          setIsSignIn={setIsSignIn}
          handleClose={handleClose}
          setIsLogged={setIsLogged}
        />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} />
      )}
    </>
  );
};

export default Auth;
