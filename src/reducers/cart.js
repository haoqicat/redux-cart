import { combineReducers } from 'redux'

const addedIds = (state = [], action) => {
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

const quantityById = (state = {}, action) => {
  return state
}

export default combineReducers({
  addedIds,
  quantityById
})
