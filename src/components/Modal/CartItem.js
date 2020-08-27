import React from 'react'
import { useRouter } from 'next/router'
import ProductCounter from '../ProductCounter'

const CartItem = ({ product, removeProduct, changeCount, changeModal }) => {
  let { name, price, previewUrl, id, count } = product

  let router = useRouter()

  function clickProduct() {
    changeModal(false)
    router.push('/shop/product/[id]', `/shop/product/${id}`)
  }
  return (
    <div className="product_item">
      <div className="row flex-nowrap">
        <div className="col-sm-2 col-3 px-0 d-flex align-items-center justify-content-center">
          <div className="image_preview" onClick={clickProduct} role="button">
            <img src={previewUrl} alt="" />
          </div>
        </div>
        <div className="col-sm-9 col-auto  d-flex align-items-center flex-nowrap flex-fill">
          <div className="row no-gutters w-100 flex-sm-row flex-column">
            <div className="col-sm-4 col-auto">
              <span
                role="button"
                className="text-primary"
                onClick={clickProduct}
              >
                {name}
              </span>
            </div>

            <div className="col-8">
              <div className="wrap mt-sm-0 mt-3 d-flex justify-content-sm-around justify-content-start">
                <ProductCounter
                  count={count}
                  changeCount={(c) => changeCount(id, c)}
                />
                <span className="full_price ml-sm-0 ml-3">{price}$</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1 d-flex align-items-center justify-content-center">
          <div
            className="remove_product"
            onClick={() => removeProduct(id)}
            role="button"
          >
            <i className="fa fa-trash remove_icon" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
