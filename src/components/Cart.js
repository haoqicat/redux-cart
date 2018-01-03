import React, { Component } from 'react'
import styled from 'styled-components'

class Cart extends Component {
  render () {
    const { products, total } = this.props
    const hasProduct = products.length > 0
    const productList = products.map(t => (
      <Product key={t.id}>
        <Name>{t.name}</Name>
        <Quantity>{t.quantity}</Quantity>
      </Product>
    ))

    const allProducts = <ProductList>{productList}</ProductList>

    const msg = <Msg>请添加商品</Msg>
    return (
      <Wrap>
        <Total>{total}元</Total>
        {
          hasProduct ? allProducts : msg
        }
      </Wrap>
    )
  }
}

export default Cart

const Wrap = styled.div`
  padding: 20px;
`
const Total = styled.div`
  margin: 20px auto;
  width: 150px;
  height: 80px;
  border-radius: 40px;
  background: #00bcd4;
  text-align: center;
  line-height: 80px;
  color: white;
  font-size: 1.8em;
`

const Msg = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #FF5722;
  color: #FF5722;
  line-height: 40px;
  text-align: center;
  margin: 30px auto;
`

const ProductList = styled.div`
  border: 2px solid #00bcd4;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  line-height: 30px;
`

const Name = styled.div`
  color: #212121;
`

const Quantity = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 13px;
  border-radius: 50%;
  background: #FF5722;
  color: white;
`