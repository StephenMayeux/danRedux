export default (state = 5, action) => {
  let counter = state;
  switch (action.type) {
    case 'INCREMENT':
      counter++;
      return counter;
    case 'DECREMENT':
      counter--;
      return counter;
    default:
      return state;
  }
}
