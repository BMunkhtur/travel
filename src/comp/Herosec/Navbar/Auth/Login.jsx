import React, { useState } from "react";
import Signin from "./signin/index";
import Signup from "./signup/index";

const Login = ({ handleClose, login }) => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <Signin setSignIn={setSignIn} handleClose={handleClose} login={login} />
      ) : (
        <Signup setSignIn={setSignIn} />
      )}
    </>
  );
};
export default Login;
