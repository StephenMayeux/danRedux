const incrementNumber = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrementNumber = () => {
  // fetch an api server endpiont
  // do fancy logic
  // store result of fancy logic in const result
  return {
    type: 'DECREMENT'
  }
}

export default {
  incrementNumber,
  decrementNumber
}
