import React, { Component } from 'react'
import store from '../store'

class Products extends Component {
  render() {
    const { products } = store.getState()
    console.log(store.getState())
    const productList = products.map(t => <div key={t.id}>{t.name}</div>)
    return (
      <div>
        <h2> 所有商品 </h2>
        {productList}
      </div>
    )
  }
}

export default Products
