import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import * as Action from '../../../redux/actions'

const Basket = ({ count_cart, changeModal }) => {
  return (
    <div
      className="basket-header"
      role="button"
      onClick={() => changeModal(true)}
    >
      <i className="fa fa-shopping-basket basket-i"></i>

      {count_cart > 0 && (
        <div className="basket-count">
          <span>{count_cart}</span>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = ({ cart }) => {
  return {
    count_cart: cart.length,
  }
}
const mapDispatchToProps = {
  changeModal: Action.changeModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
