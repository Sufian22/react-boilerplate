import React, { Component } from 'react';
import MyInput from '../MyInput/MyInput';
import MyButton from '../MyButton/MyButton';
import './MyRegisterForm.css';

class MyRegisterForm extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="registerForm">
        <MyInput placeholder="Name" />
        <MyInput placeholder="Email" />
        <MyInput placeholder="Password" />
        <MyButton
          text="Register"
          className="specialButton"
          onClick={() => console.log('Registered!')}
        />
        <MyButton text="Log In" className="simpleButton" onClick={onClick} />
      </div>
    );
  }
}

export default MyRegisterForm;
