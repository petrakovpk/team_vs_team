import {combineReducers, createStore} from 'redux'
import {setHeroesReducer} from "../reducers/setHeroesReducer.js";
import {setHeroesValReducer} from "../reducers/setHeroesValReducer.js";


const store = createStore(combineReducers({setHeroesReducer, setHeroesValReducer}))

export default store;
