/**
 * Author: Vidush H. Namah (2019)
 * 
 * Reducers for all screens are combined here
 * File acts as the main Reducer connection point
 */

import { combineReducers } from 'redux'

import MainStateReducer from './Main'

export default combineReducers({
    Main: MainStateReducer
});