import React from 'react'
import Cart from '../components/Cart'
import { connect } from 'react-redux'

const CartContainer = props => <Cart {...props} />

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps)(CartContainer)
