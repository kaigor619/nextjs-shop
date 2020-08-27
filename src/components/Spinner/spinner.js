import React from 'react'
import styles from './spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.spinner_canvas}>
      <div className="spinner">
        <div className="lds-css ng-scope">
          <div className={styles.lds_spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
