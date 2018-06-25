export const INCREMENT_NUM = 'INCREMENT_NUM'
export const DECREMENT_NUM = 'DECREMENT_NUM'

export const incrementNum = caption => {
  return {
    type: INCREMENT_NUM,
    caption
  }
}

export const decrementNum = caption => {
  return {
    type: DECREMENT_NUM,
    caption
  }
}
