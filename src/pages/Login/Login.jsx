import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./login.css";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const handleLogin = () => {
    {
      signState === "Sign Up"
        ? setSignState("Sign In")
        : setSignState("Sign Up");
    }
  };
  return (
    <div className="login">
      <img src={logo} alt="logo" className="login_logo" />
      <div className="login_form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>

          <div className="form_help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p> Need Help?</p>
          </div>
        </form>
        <div className="form_switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={handleLogin}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span onClick={handleLogin}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
