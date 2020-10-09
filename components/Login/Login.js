import React from "react";

import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../ContextApi/StateProvider";
import { actionTypes } from "../../ContextApi/reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const sighIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://loganix.com/wp-content/uploads/2020/03/slack-icon.png"
          alt=""
        />
        <h1>Sign in to Daniel Zafrir HQ</h1>
        <p>This is a clone meant demonstrate React Development Skills</p>
        <Button onClick={sighIn}>Sigh In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
