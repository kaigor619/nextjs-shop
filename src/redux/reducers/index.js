import * as Types from '../types'

export const initialState = {
  count_cart: 0,
  total_price: 0,
  cart: [],
  modal: false,
}

/**
 * Find cart item by id
 *
 * @param {Number} index
 * @param {Object} State
 */
const findCartItem = (id, state) => {
  let ind = state.cart.findIndex((item) => id === item.id)
  let cartItem = state.cart[ind]
  return [ind, cartItem]
}

const updateCount = (id, state, newCount) => {
  let [ind, cartItem] = findCartItem(id, state)

  let updatedItem = {
    ...cartItem,
    count: newCount,
  }

  let cart = [
    ...state.cart.slice(0, ind),
    updatedItem,
    ...state.cart.slice(ind + 1),
  ]

  return {
    ...state,
    cart,
  }
}

const deleteCartItem = (id, state) => {
  let [ind, cartItem] = findCartItem(id, state)

  let cart = [...state.cart.slice(0, ind), ...state.cart.slice(ind + 1)]

  return {
    ...state,
    modal: true,
    cart,
  }
}

const addProduct = (product, state) => {
  let { count, id } = product

  let [ind, cartItem] = findCartItem(id, state)

  let newItem, cart

  if (ind > -1) {
    newItem = {
      ...cartItem,
      count: count + cartItem.count,
    }
    cart = [...state.cart.slice(0, ind), newItem, ...state.cart.slice(ind + 1)]
  } else {
    newItem = {
      ...product,
    }
    cart = [...state.cart, newItem]
  }

  return {
    ...state,
    modal: true,
    cart,
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_PRODUCT: {
      let { product } = action
      return addProduct(product, state)
    }
    case Types.CHANGE_MODAL: {
      return { ...state, modal: action.payload }
    }

    case Types.UPDATE_COUNT: {
      let { id, count } = action
      return updateCount(id, state, count)
    }

    case Types.DELETE_CART_ITEM: {
      return deleteCartItem(action.id, state)
    }
    default:
      return state
  }
}
