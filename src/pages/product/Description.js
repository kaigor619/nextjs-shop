import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ProductCounter from '../../components/ProductCounter'
import ProductAttr from './Attributes'
import { addProduct } from '../../redux/actions'
import styles from './Product.module.css'

const ProductDescription = ({ product, addProduct, in_cart }) => {
  let { name, price, description, attr } = product

  let [error, setError] = useState('')
  let [count, setCount] = useState(1)
  let [attribute, setAttribute] = useState(attr[0])

  const clickAttr = (attr) => {
    setAttribute(attr)
  }
  const changeCount = (num) => {
    setCount(+parseInt(num))
  }
  const addCart = () => {
    let message = ''

    if (count >= 1 && isFinite(count) && attribute !== '') {
      let obj = Object.assign(product, { count })
      addProduct(obj)
    } else if (count < 1 || !isFinite(count)) {
      message = 'Неверное количество товара'
    } else if (attribute === '') {
      message = 'Выберете атрибут'
    }

    if (error !== message) setError(message)
  }

  let classNames = styles.btn_add_product + ' btn btn-primary '
  if (in_cart) classNames += styles.in_cart

  return (
    <div className={styles.product_description}>
      <h2 className={styles.product_name}>{name}</h2>
      <span className={styles.product_price}>${price}</span>

      <p className="product_about">{description}</p>

      <ProductAttr data={attr} clickAttr={clickAttr} />

      <ProductCounter changeCount={changeCount} count={1} />
      <div className="product_add_cart">
        <button onClick={addCart} type="button" className={classNames}>
          <i className="fa fa-shopping-cart mr-1" aria-hidden="true"></i>{' '}
          <span>Add to Cart</span>
        </button>
      </div>
      <p className={styles.error_message}>{error}</p>
    </div>
  )
}

const mapStateToProps = ({ cart }, { product }) => {
  let in_cart = cart.some((item) => product.id === item.id)

  return { in_cart }
}

const mapDispatchToProps = {
  addProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription)
