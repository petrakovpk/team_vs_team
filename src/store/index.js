import {createStore} from 'redux'
import {setHeroesReducer} from '../reducers/index.js'


const store = createStore(setHeroesReducer)