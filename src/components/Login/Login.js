import React, { useContext, useState } from "react";
import classes from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { loginFun } from "../loginService";
import { Context } from "../Context/Context";

const Login = () => {
  const { user, setUser } = useContext(Context);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log(email, password);
  //     let response = await loginFun(email, password);
  //     if (response.status === 200) {
  //       console.log(response.data.Token);
  //       sessionStorage.setItem("jwt", response.data.Token);
  //       navigate("/");
  //     }
  //     console.log(response);
  //   } catch (err) {
  //     console.log("Error", err);
  //     //error
  //   }
  // };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await loginFun(email, password);

      if (response.status === 200) {
        sessionStorage.setItem("jwt", response.data.Token);
        setUser(response.data.user);
        navigate("/");
      }
    } catch (err) {
      alert("User does not exists");
    }
  };
  return (
    <div className={classes.loginbox}>
      <form>
        <center>
          <h3>Sign In</h3>
        </center>
        <div className="form-group mt-4 ">
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            className="form-control "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-4">
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            className="form-control "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <div className="form-group mt-4">
            <button
              onClick={onSubmitHandler}
              className="btn btn-success form-control "
            >
              submit
            </button>
          </div>
        </div>
        <div className={classes.button}>
          <NavLink to="/register" className={classes.register}>
            Sign Up
          </NavLink>
          <NavLink to="/forgetPassword" className={classes.forgetpass}>
            Forget Password
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
