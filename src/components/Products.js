import React, { Component } from 'react'
import store from '../store'

class Products extends Component {
  state = {
    products: [
      {
        id: '324',
        name: '苹果电脑'
      },
      {
        id: '452',
        name: '橘子'
      }
    ]
  }
  render() {
    console.log(store.getState())
    const { products } = this.state
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
