import {
  INCREMENT_NUM,
  DECREMENT_NUM
} from '../actions/actions'

function counter(state = {
  First: 0,
  Second: 10,
  Third: 20
}, action) {
  const { type, caption } = action
  switch (type) {
    case INCREMENT_NUM:
      return {
        ...state,
        [caption]: state[caption] + 1
      }
    case DECREMENT_NUM:
      return {
        ...state,
        [caption]: state[caption] - 1
      }
    default:
      return state
  }
}

export default counter
