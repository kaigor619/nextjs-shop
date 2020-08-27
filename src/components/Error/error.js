import React from 'react'
// import img from './error_image.jpg'
const img = require('./error_image.jpg')

import styles from './error.module.css'

const Error = () => {
  return (
    <div className={styles.error_block}>
      <img src={img} alt="Ошибка" />
      <p className={styles.error_block_text}>
        We apologize for the inconvenience.
      </p>
    </div>
  )
}

export default Error
