import React, { Component } from 'react'
import store from '../store'

class Products extends Component {
  handleClick = productId => {
    store.dispatch({ type: 'ADD_TO_CART', productId })
  }

  render() {
    const { products } = store.getState()
    console.log(store.getState())
    const productList = products.map(t => (
      <div key={t.id}>
        <div>
          {t.name}
        </div>
        <button onClick={() => this.handleClick(t.id)} >购买</button>
      </div>)
    )
    return (
      <div>
        <h2> 所有商品 </h2>
        {productList}
      </div>
    )
  }
}

export default Products
