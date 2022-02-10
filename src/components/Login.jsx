import React, { Component } from "react";
import '../style.css';
export default class Login extends React.PureComponent {
  render() {
    return (
      <div className="login">
        <input type="text" placeholder="username" />
        <button>Login</button>
      </div>
    );
  }
}
