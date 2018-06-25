function apple(state = {
  name: 'apple'
}, action){
  return state
}

function banana(state = {
  name: 'banana'
}, action){
  return state
}

export default function fruit(state, action) {
  return {
    apple: apple(state, action),
    banana: banana(state, action)
  }
}
