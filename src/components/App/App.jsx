import React from 'react';
import './App.css';
import Home from '../Home'
import Navigation from '../Navigation'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import store from '../../store/store.js';





function App() {

  return (

    <Provider store={store} >
        <Navigation></Navigation>
        <Home></Home>
    </Provider>
  );
}

export default App;
