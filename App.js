import React, { Component } from 'react';  
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm'

class App extends Component {  
  state = {loggedIn: null};
  
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAFBeI3LHuib-kfPmnjetAkZQJomF1-MBc',
      authDomain: 'authapp-fadzripm.firebaseapp.com',
      databaseURL: 'https://authapp-fadzripm.firebaseio.com',
      projectId: 'authapp-fadzripm',
      storageBucket: 'authapp-fadzripm.appspot.com',
      messagingSenderId: '1031466873882',
      appId: '1:1031466873882:web:de720c04b90504ea918da3',
      measurementId: 'G-CGX2DML0E8'
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    })
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
      </Button>);
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
      }
    }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        {this.renderContent()}
      </View> 
      
    )
  }
}
export default App;
