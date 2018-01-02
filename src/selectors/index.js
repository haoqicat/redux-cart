export const getCartProducts = state => {
  const allProducts = getProductsById(state)
  const cartProducts = state.cart.addedIds.map(id => {
   return {
     ...allProducts[id],
     quantity: state.cart.quantityById[id]
   }
  })
  return cartProducts
}

const getProductsById = state => {
  return state.products.reduce((obj, product) => {
    obj[product.id] = product
    return obj
  }, {})
}

export const getTotal = state =>
  state.cart.addedIds
    .reduce(
      (total, id) =>
        total + getProductsById(state)[id].price * state.cart.quantityById[id],
      0
    )
    .toFixed(2)