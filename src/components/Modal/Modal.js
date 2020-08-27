import React from 'react'
import { useRouter } from 'next/router'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as Action from '../../redux/actions'
import CartItem from './CartItem'
import CartEmpty from './CartEmpty'
import back from './back.svg'
import close from './close.svg'

const ButtonCheckout = () => {
  return (
    <Button variant="primary" className="btn_checkout ml-sm-3 ml-0">
      Checkout
      <i className="fa checkout_icon fa-credit-card-alt" aria-hidden="true"></i>
    </Button>
  )
}
const ContinueShopping = ({ changeModal }) => {
  return (
    <a
      href="#"
      className="back_shopping text-decoration-none"
      onClick={() => changeModal(false)}
    >
      <img src={back} className="back_shopping_icon" alt="" /> Continue shopping
    </a>
  )
}

const ModalHeader = ({ changeModal }) => {
  return (
    <div className="modal_header">
      <h3>Cart</h3>

      <div onClick={() => changeModal(false)} className="close_modal">
        <img src={close} className="close_icon" alt="" />
      </div>
    </div>
  )
}
const ModalBody = ({ cart, changeModal, deleteCartItem, changeCount }) => {
  if (cart.length == 0) return <CartEmpty />

  let cart_items = cart.map((item) => {
    return (
      <CartItem
        key={item.name + item.id}
        product={item}
        removeProduct={deleteCartItem}
        changeCount={changeCount}
        changeModal={changeModal}
      />
    )
  })

  return <div className="modal_body">{cart_items}</div>
}
const ModalFooter = ({ cart, changeModal }) => {
  let total_price = cart.reduce((previousValue, { price, count }) => {
    return previousValue + +price * +count
  }, 0)

  return (
    <div className="modal_footer d-flex align-items-center justify-content-between">
      <ContinueShopping changeModal={changeModal} />

      <div className="wrap_total_checkout d-flex align-items-sm-center flex-sm-row flex-column">
        <div className="total">
          <span>Total:</span>{' '}
          <span className="total_price">{total_price}$</span>
        </div>

        {cart.length > 0 && <ButtonCheckout />}
      </div>
    </div>
  )
}

const VerticalModal = ({
  modal,
  cart,
  changeModal,
  deleteCartItem,
  changeCount,
}) => {
  if (!modal) return null

  let propsBody = {
    changeModal,
    deleteCartItem,
    changeCount,
  }

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modal}
      onHide={() => changeModal(false)}
    >
      <ModalHeader changeModal={changeModal} />
      <ModalBody cart={cart} {...propsBody} />
      <ModalFooter cart={cart} changeModal={changeModal} />
    </Modal>
  )
}

const mapStateToProps = ({ modal, cart }) => {
  if (!modal) return { modal }

  return { modal, cart }
}

const mapDispatchToProps = {
  changeModal: Action.changeModal,
  deleteCartItem: Action.deleteCart,
  changeCount: Action.changeCountById,
}

export default connect(mapStateToProps, mapDispatchToProps)(VerticalModal)
