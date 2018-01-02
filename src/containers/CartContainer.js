import React from 'react'
import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { getCartProducts, getTotal } from '../selectors'

const CartContainer = props => <Cart {...props} />

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(mapStateToProps)(CartContainer)
