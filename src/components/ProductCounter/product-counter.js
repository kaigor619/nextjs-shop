import React, { Component } from 'react'
import styles from './product-counter.module.css'

class ProductCounter extends Component {
  state = {
    count: this.props.count,
  }
  plusClick = () => {
    this.setState(({ count }) => {
      let num = isFinite(count) ? ++count : 1
      this.update(num)
      return {
        count: num,
      }
    })
  }
  minusClick = () => {
    this.setState(({ count }) => {
      let num = 1
      if (isFinite(count)) {
        num = count > 1 ? --count : 1
      }

      this.update(num)
      return {
        count: num,
      }
    })
  }
  counterChange = (e) => {
    this.setState({ count: e.target.value })
    this.update(e.target.value)
  }
  update = (val) => {
    this.props.changeCount(val)
  }
  render() {
    let count = this.state.count
    return (
      <div className={styles.product_counter}>
        <button onClick={this.minusClick} className={styles.btn_minus}>
          <i className="fa fa-minus"></i>
        </button>
        <input
          onChange={this.counterChange}
          className={styles.input_counter}
          value={count}
        />
        <button onClick={this.plusClick} className={styles.btn_plus}>
          <i className="fa fa-plus"></i>
        </button>
      </div>
    )
  }
}

export default ProductCounter
