import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routes from './src/Routes';
import reduces from './src/reducers/index';
import ReduxThunk from 'redux-thunk';
import firebase from './firebase'

export default class App extends Component {

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