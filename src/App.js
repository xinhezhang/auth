import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    // initialize firebase using given configuration
    firebase.initializeApp({
      apiKey: 'AIzaSyBoSUlrivmk1--pSyzlIBTuilUpChu2Qzs',
      authDomain: 'auth-react-native-xinhezhang.firebaseapp.com',
      databaseURL: 'https://auth-react-native-xinhezhang.firebaseio.com',
      projectId: 'auth-react-native-xinhezhang',
      storageBucket: 'auth-react-native-xinhezhang.appspot.com',
      messagingSenderId: '222003941114'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}
