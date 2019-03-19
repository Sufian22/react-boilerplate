import React from 'react';
import './SignPanel.css';
import MyRegisterForm from '../RegisterForm/MyRegisterForm';
import MyLoginForm from '../LoginForm/LoginForm';
import MyBrand from '../MyBrand/MyBrand';

class SignPanel extends React.Component {
  render() {
    const {
      showRegisterForm,
      setShowRegisterForm,
      loginSuccess,
      setLoginSuccess,
    } = this.props;
    return (
      <div className="signPanel">
        <MyBrand brand="TESTAPP" />
        {showRegisterForm && (
          <MyRegisterForm
            onClick={() => setShowRegisterForm(!showRegisterForm)}
          />
        )}
        {!showRegisterForm &&
          !loginSuccess && (
            <MyLoginForm
              onRegisterClick={() => setShowRegisterForm(!showRegisterForm)}
              onloginSuccesss={() => setLoginSuccess(true)}
            />
          )}
      </div>
    );
  }
}

export default SignPanel;
