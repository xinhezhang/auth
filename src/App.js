import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      loggedIn: null,   // null: do not know, false: not logged in
    });
  }

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

    // sign in <-> sign out
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button>Logout</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
