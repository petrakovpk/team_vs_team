import React from 'react';
import './App.css';
import Home from '../Home'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import {setHeroesReducer} from "../../reducers/setHeroesReducer.js";


const store = createStore(combineReducers({setHeroesReducer}))



function App() {

  return (
    <Provider store={store} >

        <Home></Home>


    </Provider>
  );
}

export default App;
