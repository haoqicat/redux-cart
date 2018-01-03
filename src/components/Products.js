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
      <ProductWrap key={t.id}>
        <ProductInfo>
          <div className="name">
            {t.name}
          </div>
          <div className="price">
            {t.price}元
          </div>
        </ProductInfo>
        <Button onClick={() => this.handleClick(t.id)} >购买</Button>
      </ProductWrap>)
    )
    return (
      <Wrap>
        <Title> Redux 购物车 </Title>
        <ProductList>
          {productList}
        </ProductList>
      </Wrap>
    )
  }
}

export default Products

const Wrap =  styled.div`
  background: #00bcd4;
  padding-bottom: 20px;
`

const Title = styled.div`
  padding: 40px;
  text-align: center;
  color: white;
`

const ProductList = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`

const ProductWrap = styled.div`
  background: white;
  padding: 30px 20px 30px;
  border-radius: 5px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProductInfo = styled.div`
  color: #212121;
  text-align: center;
  .name {
    font-size: 27px;
  }
  .price {
    font-size: 14;
    opacity: .7;
    margin: 10px 0 20px;
  }
`

const Button = styled.button`
  background-color: #FF5722;
  color: white;
  text-align: center;
  border-radius: 3px;
  line-height: 2;
  padding: 3px 30px;
  border: 0;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  }
  &:focus {
    outline: 0;
  }
`