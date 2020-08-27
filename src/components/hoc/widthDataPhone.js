import React from 'react'
import { PhoneConsumer } from '../../context/phone-context'

const withDataPhone = () => (Wrapped) => {
  return (props) => {
    return (
      <PhoneConsumer>
        {(phoneservice) => {
          return <Wrapped {...props} phoneservice={phoneservice} />
        }}
      </PhoneConsumer>
    )
  }
}

export { withDataPhone }
