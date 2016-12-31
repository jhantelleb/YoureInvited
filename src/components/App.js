import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Button, Spinner } from './common';
import LoginForm from './LoginForm.js';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyAVue2dLu3KRfTLPjxYhkuQmByAb2xkomo',
    authDomain: 'youreinvited-c6bfb.firebaseapp.com',
    databaseURL: 'https://youreinvited-c6bfb.firebaseio.com',
    storageBucket: 'youreinvited-c6bfb.appspot.com',
    messagingSenderId: '146367220879'
  });

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
        // <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        // </CardSection>
      );
    case false:
      return <LoginForm />;
    default:
      return <LoginForm />;
  }
}

render() {
  return (
    this.renderContent()
  );
  }
}

export default App;
