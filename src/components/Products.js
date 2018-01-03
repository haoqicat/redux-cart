import React, { Component } from 'react'
import store from '../store'
import styled from 'styled-components'

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
      <Wrap>
        <h2> 所有商品 </h2>
        {productList}
      </Wrap>
    )
  }
}

export default Products

const Wrap =  styled.div`
  background: #00bcd4;
`