import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      signupLoading: false,
      loginLoading: false,
    };
    this.onSignupButtonPress = this.onSignupButtonPress.bind(this);
    this.onLoginButtonPress = this.onLoginButtonPress.bind(this);
    this.onSignupSuccess = this.onSignupSuccess.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onSignupFail = this.onSignupFail.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  onSignupButtonPress() {
    const { email, password } = this.state;
    // clear error message
    this.setState({
      error: '',
      signupLoading: true,
    });
    // https://firebase.google.com/docs/auth/web/password-auth
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onSignupSuccess)
      .catch(this.onSignupFail);
  }

  onLoginButtonPress() {
    const { email, password } = this.state;
    // clear error message
    this.setState({
      error: '',
      loginLoading: true,
    });
    // https://firebase.google.com/docs/auth/web/password-auth
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(this.onLoginFail);
  }

  onSignupSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      signupLoading: false,
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loginLoading: false,
    });
  }

  onSignupFail() {
    this.setState({
      error: 'Signup Failed.',
      signupLoading: false,
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Login Failed.',
      loginLoading: false,
    });
  }

  renderSignupButton() {
    if (this.state.signupLoading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.onSignupButtonPress}>
        Signup
      </Button>
    );
  }

  renderLoginButton() {
    if (this.state.loginLoading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.onLoginButtonPress}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="test@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderSignupButton()}
          {this.renderLoginButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
