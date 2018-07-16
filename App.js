import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import Routes from './src/Routes';
import reduces from './src/reducers/index';
import ReduxThunk from 'redux-thunk';

export default class App extends Component {
   
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDJftb-Frw6E9V0jt1e9Q3IPDCnh0ScZq8",
      authDomain: "whatsappclone-5d74a.firebaseapp.com",
      databaseURL: "https://whatsappclone-5d74a.firebaseio.com",
      projectId: "whatsappclone-5d74a",
      storageBucket: "whatsappclone-5d74a.appspot.com",
      messagingSenderId: "327126726782"
    };
    firebase.initializeApp(config);
   } 
  
  render () {
    return (
      <Provider
        store={createStore(reduces, {}, applyMiddleware(ReduxThunk))}
      >
        <Routes/>
      </Provider>
    );
  }

}