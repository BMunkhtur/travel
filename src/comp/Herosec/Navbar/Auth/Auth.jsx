import React from "react";
import { useState } from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      {isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} />
      )}
    </>
  );
};

export default Auth;
