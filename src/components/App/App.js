import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../../redux/store'
import { PhoneProvider } from '../../context/phone-context'
import PhoneService from '../../service/phone-service'
import Header from '../Header'
import Modal from '../Modal'

const service = new PhoneService()

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <PhoneProvider value={service}>
          <Header />
          <Modal />
          <Component {...pageProps}></Component>
        </PhoneProvider>
      </Provider>
    )
  }
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
