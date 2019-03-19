import React, { Component } from 'react';
import MyInput from '../MyInput/MyInput';
import MyButton from '../MyButton/MyButton';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    const { onRegisterClick, onloginSuccesss } = this.props;
    const checkValues = () => {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email === 'test' && password === 'demodemo') {
        onloginSuccesss();
      } else {
        console.log('Error logging in');
      }
    };
    return (
      <div className="loginForm">
        <MyInput id="email" placeholder="Email" />
        <MyInput id="password" placeholder="Password" type="password" />
        <MyButton
          text="Log in"
          className="specialButton"
          onClick={() => checkValues()}
        />
        <MyButton
          text="Register"
          className="simpleButton"
          onClick={onRegisterClick}
        />
      </div>
    );
  }
}

export default LoginForm;
