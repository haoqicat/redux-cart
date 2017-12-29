import React, { Component } from 'react'

class Cart extends Component {
  render () {
    const { products } = this.props
    const hasProduct = products.length > 0
    const productList = products.map(t => (
      <div key={t.id}>
        {t.name}
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
