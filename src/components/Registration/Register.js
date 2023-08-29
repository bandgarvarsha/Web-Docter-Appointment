import React, { useState } from "react";
import classes from "./Register.module.css";
import { registrationFun } from "../loginService";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [emailId, setEmaiId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(fullName);
    try {
      let register = await registrationFun(
        fullName,
        address,
        mobileNo,
        emailId,
        password
      );
      console.log(register);
    } catch (err) {
      alert("registration required");
    }
  };

  return (
    <div>
      <form className={classes.registrationbox}>
        <center>
          <h3>Registration</h3>
        </center>
        <div className="form-group mt-4 ">
          <input
            type="text"
            value={fullName}
            placeholder="Enter your FullName"
            className="form-control"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group mt-4 ">
          <input
            type="text"
            value={address}
            placeholder="Enter Address"
            className="form-control"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group mt-4 ">
          <input
            type="text"
            value={mobileNo}
            placeholder="Enter Mobile Number"
            className="form-control"
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="form-group mt-4 ">
          <input
            type="email"
            value={emailId}
            placeholder="Enter email"
            className="form-control"
            onChange={(e) => setEmaiId(e.target.value)}
          />
        </div>

        <div className="form-group mt-4 ">
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div className="form-group mt-4 ">
          <input
            type="password"
            placeholder="Confirm password"
            className="form-control"
          />
        </div> */}
        <div className={classes.formactions}>
          <button className="btn btn-warning" type="reset">
            Reset
          </button>
          <div className={classes.submit}>
            <button
              className="btn btn-success"
              type="submit"
              onClick={(e) => onSubmitHandler(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
