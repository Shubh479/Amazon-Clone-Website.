import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
// import { auth } from "firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signInHand(e) {
    e.preventDefault();
    if (email && password !== "") {
      history.push("/");
    } else {
      
    }
  }

  function registerHand(e) {
    e.preventDefault();
    //   auth
    //     .createUserWithEmailAndPassword(email, password)
    //     .then((auth) => {
    //       console.log(auth);
    //     })
    //     .catch((error) => alert(error.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https:upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signInHand}
          >
            Sign-In
          </button>
        </form>
        <p>
          By Signing-in you agree to Amazon's conditions of use & sale. Please
          see our privacy notice our cookies notice and our interest based ads
          notice.
        </p>
        <button className="login__registerButton" onClick={registerHand}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}
export default Login;
