import React, { Component } from 'react';
import firebase from 'firebase';
import { Image, Alert } from 'react-native';
import { Button, CardSection, Input, LoginCard, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '',
            password: '',
            error: '',
            loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSucess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSucess.bind(this))
      .catch(this.onLoginFail.bind(this));
    });
  }

  onLoginSucess() {
    this.setState({ //navigate to next scene
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
    Alert.alert('Authentication Failed', 'Please try again',
    [{ text: 'Ok', onPress: () => console.log('Failed') }]);
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    const { backgroundImageStyle } = styles;
      return (
      <Image source={require('./images/LaunchScreen@1x.png')} style={backgroundImageStyle} >
       <LoginCard>
        <CardSection backgroundColor='transparent'>
          <Input
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          label="Email"
          placeholder="guest@gmail.com"
          />
        </CardSection>
        <CardSection backgroundColor='transparent'>
        <Input
           onChangeText={(password) => this.setState({ password })}
           value={this.state.password}
           secureTextEntry
           label="Password"
           placeholder="password"
        />
        </CardSection>
        <CardSection>
        {this.renderButton()}
        </CardSection>
        </LoginCard>
        </Image>
      );
  }
}

const styles = {
backgroundImageStyle: {
  flex: 1,
  // justifyContent: 'flex-end',
  alignItems: 'center',
  width: null,
  height: null,
  backgroundColor: 'transparent'
},
textStyle: {
  fontSize: 20,
  alignSelf: 'center',
  color: 'red'
}
};

export default LoginForm;
