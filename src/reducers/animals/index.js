import { combineReducers } from 'redux'
import cat from './cat'
import dog from './dog'

const animals = combineReducers({
  cat,
  dog
})

export default animals
