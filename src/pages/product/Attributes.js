import React, { Component } from 'react'
import styles from './Product.module.css'

class ProductAttr extends Component {
  state = {
    active: this.props.data[0],
    elems: this.props.data,
  }

  componentDidUpdate(prev) {
    if (prev.data !== this.props.data) {
      this.setState({ elems: this.props.data })
    }
  }

  clickAttribute = (active) => {
    this.setState({ active })
    this.props.clickAttr(active)
  }
  render() {
    let { elems, active } = this.state
    let attributes = elems.map((elem) => {
      let classNames = styles.btn_product_attr + ' btn btn-secondary '
      if (active === elem) classNames += styles.btn_active

      return (
        <button
          onClick={() => this.clickAttribute(elem)}
          key={elem}
          type="button"
          className={classNames}
        >
          {elem}
        </button>
      )
    })
    return (
      <div
        className={styles.btn_product_group + ' btn-group'}
        role="group"
        aria-label="Attributes"
      >
        {attributes}
      </div>
    )
  }
}

export default ProductAttr
