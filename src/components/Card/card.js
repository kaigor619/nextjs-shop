import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import styles from './card.module.css'
import * as Action from '../../redux/actions'

const Card = ({ price, name, previewUrl, id, store, addProduct, in_cart }) => {
  function handleClick() {
    addProduct({ count: 1, id, price, name, previewUrl })
  }

  let classnames = styles.btn_add_cart + ' btn btn-primary '
  if (in_cart) classnames += styles.in_cart

  return (
    <div className="col-md-4 col-xl-3 col-6 d-flex justify-content-center">
      <div className={styles.card}>
        <Link href={`/shop/product/[id]`} as={`/shop/product/${id}`}>
          <a>
            <div className={styles.image_carcass}>
              <img
                src={previewUrl}
                className={styles.card_image + ' card-img-top'}
                alt="..."
              />
            </div>
          </a>
        </Link>

        <div className="card-body">
          <p className={styles.card_title}>{name}</p>
          <p className={styles.card_price}>${price}</p>
          <button className={classnames} onClick={handleClick}>
            <i
              className={`fa ${styles.cart_icon} fa-shopping-cart`}
              aria-hidden="true"
            ></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ cart }, { id }) => {
  let in_cart = cart.some((item) => id === item.id)

  return { in_cart }
}

const mapDispatchToProps = {
  addProduct: Action.addProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
