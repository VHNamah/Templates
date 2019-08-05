/**
 * Author: Vidush H. Namah (2019)
 * 
 * Connects Reducer to the application Store
 * Note: Consider use of AsyncStorage for persistance
 */

import { createStore } from 'redux'
import Reducer from './Reducer'

export default createStore(Reducer)