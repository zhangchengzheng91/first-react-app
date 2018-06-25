import { combineReducers } from 'redux'
import counter from './counter'
import todo from './todo'
import fruit from './fruit'
import animals from './animals'

const rootReducers = combineReducers({
  counter,
  todo,
  fruit,
  animals
})

export default rootReducers
