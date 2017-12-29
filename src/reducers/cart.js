const initialState = []

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if(state.indexOf(action.productId) !== -1) {
        return state
      }
      return [...state, action.productId]
    default:
      return state
  }
}

export default cart
