import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  onSignupBtnPress() {
    const { email, password } = this.state;
    // clear error message
    this.setState({
      error: '',
    });
    // https://firebase.google.com/docs/auth/web/password-auth
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error.message);
        this.setState({
          error: error.message,
        });
      }
    );
  }

  onLoginBtnPress() {
    const { email, password } = this.state;
    // clear error message
    this.setState({
      error: '',
    });
    // https://firebase.google.com/docs/auth/web/password-auth
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error.message);
        this.setState({
          error: error.message,
        });
      }
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
          <Button onPress={this.onSignupBtnPress.bind(this)}>
            Signup
          </Button>
          <Button onPress={this.onLoginBtnPress.bind(this)}>
            Login
          </Button>
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
