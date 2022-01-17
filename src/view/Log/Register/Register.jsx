import React from "react";
import "../../../style/Global.scss";
import "../../../style/Login.scss";

const Register = () => {
  return (
    <div className="form-container">
      <h2>Register</h2>

      <div className="name">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="user_name">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="Text input"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>

        <p className="help is-success">This username is available</p>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-danger"
            type="email"
            placeholder="Email input"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div>

      <div className="terms">
        <div className="agree">
          <label className="agreeBox">
            <input type="checkbox" className="check" />I agree to the{" "}
            <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>

      <div className="field-bottom is-grouped">
        <div className="control">
          <button className="button is-link btn-success">Submit</button>
        </div>
        <div className="control1">
          <button className="button is-link is-light btn-danger">Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default Register;
