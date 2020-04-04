import {createStore} from 'redux'
import {Reducer}from './containers/Products/Reducer'


export const Store=createStore(Reducer)