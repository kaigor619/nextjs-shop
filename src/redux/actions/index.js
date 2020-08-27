import * as Types from '../types'

export const phoneLoaded = (newBooks) => {
  return {
    type: Types.PHONE_LOADED,
    payload: newBooks,
  }
}

export const addPrice = (price) => {
  return {
    type: Types.ADD_PRICE,
    price: price,
  }
}

export const addProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product: product,
  }
}

export const deleteCart = (id) => {
  return {
    type: Types.DELETE_CART_ITEM,
    id,
  }
}
export const changeModal = (payload) => {
  return {
    type: Types.CHANGE_MODAL,
    payload,
  }
}
export const changeCountById = (id, count) => {
  return {
    type: Types.UPDATE_COUNT,
    id,
    count,
  }
}
