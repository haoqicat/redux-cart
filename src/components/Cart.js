import React, { Component } from 'react'

class Cart extends Component {
  render () {
    const { products, total } = this.props
    const hasProduct = products.length > 0
    const productList = products.map(t => (
      <div key={t.id}>
        {t.name}--{t.quantity}
      </div>
    ))
    return (
      <div>
        <p>总计：{total}元</p>
        {
          hasProduct ? productList : '请添加商品'
        }
      </div>
    )
  }
}

export default Cart
