import React, { Component } from 'react'
import ProductsContainer from '../containers/ProductsContainer'
import CartContainer from '../containers/CartContainer'

class Main extends Component {
  render() {
    return (
      <div>
        <ProductsContainer />
        <hr />
        <CartContainer />
      </div>
    )
  }
}

export default Main
