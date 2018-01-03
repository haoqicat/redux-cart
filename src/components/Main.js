import React, { Component } from 'react'
import ProductsContainer from '../containers/ProductsContainer'
import CartContainer from '../containers/CartContainer'
import styled from 'styled-components'

class Main extends Component {
  render() {
    return (
      <Wrap>
        <ProductsContainer />
        <CartContainer />
      </Wrap>
    )
  }
}

export default Main

const Wrap = styled.div`
  max-width: 431px;
  height: 750px;
  margin: 0 auto;
  border: 20px solid #212121;
  border-radius: 10px;
`
