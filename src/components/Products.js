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
        <Button onClick={() => this.handleClick(t.id)} >购买</Button>
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

const Button = styled.button`
  background-color: #FF5722;
  color: white;
  text-align: center;
  border-radius: 3px;
  line-height: 2;
  padding: 3px 30px;
  border: 0;
`