import React, { Component } from 'react'
import store from '../store'

class Cart extends Component {
  render () {
    const { cart } = store.getState()
    const hasProduct = cart.length > 0
    const productList = cart.map(t => (
      <div key={t}>
        {t}
      </div>
    ))
    return (
      <div>
        {
          hasProduct ? productList : '请添加商品'
        }
      </div>
    )
  }
}

export default Cart
