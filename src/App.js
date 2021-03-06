import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAR7rlpFwwEHKgphLIflLHVDd4SwP3VCTk',
      authDomain: 'manager-95c28.firebaseapp.com',
      databaseURL: 'https://manager-95c28.firebaseio.com',
      projectId: 'manager-95c28',
      storageBucket: 'manager-95c28.appspot.com',
      messagingSenderId: '184963405016'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
