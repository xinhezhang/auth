import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onSignupBtnPress() {
    const { email, password } = this.state;
    // clear error message
    this.setState({
      error: '',
      loading: true,
    });
    // https://firebase.google.com/docs/auth/web/password-auth
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Signup success');
        this.setState({
          email: '',
          password: '',
          error: '',
          loading: false,
        });
      })
      .catch(({ code, message }) => {
        console.log(`${code}: ${message}`);
        this.setState({
          error: message,
        });
      }
    );
  }

  onLoginBtnPress() {
    const { email, password } = this.state;
    // clear error message
    this.setState({
      error: '',
      loading: true,
    });
    // https://firebase.google.com/docs/auth/web/password-auth
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login success');
        this.setState({
          email: '',
          password: '',
          error: '',
          loading: false,
        });
      })
      .catch(({ code, message }) => {
        console.log(`${code}: ${message}`);
        this.setState({
          error: message,
        });
      }
    );
  }

  renderSignupBtn() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
      <Button onPress={this.onSignupBtnPress.bind(this)}>
        Signup
      </Button>
    );
  }

  renderLoginBtn() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
      <Button onPress={this.onLoginBtnPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder='test@gmail.com'
            secureTextEntry={false}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder='password'
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderSignupBtn()}
          {this.renderLoginBtn()}
        </CardSection>
      </Card>
    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};
