import React, { Component } from 'react'
import Card from '../../components/Card'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'
import styles from './Shop.module.css'
import PhoneService from '../../service/phone-service'

const Shop = ({ phones }) => {
  let list = phones.map((item) => {
    return <Card {...item} key={item.id} />
  })
  return (
    <div className={styles.shop_content}>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Phones</h1>
        <div className="row no-gutters">{list}</div>
      </div>
    </div>
  )
}

class ShopContainer extends Component {
  static async getInitialProps({ req }) {
    let phones = null

    if (!req) {
      return { phones }
    }

    try {
      phones = await PhoneService().getPhones()
    } catch (error) {
      return { error }
    }

    return { phones }
  }

  async load() {
    let phones = []
    try {
      phones = await PhoneService().getPhones()
    } catch (error) {
      return this.setState({ error, loading: false })
    }
    this.setState({ loading: false, phones })
  }

  state = {
    loading: !this.props.phones,
    phones: this.props.phones,
    error: this.props.error,
  }

  componentDidMount() {
    if (!this.state.phones) {
      this.load()
    }
  }

  render = () => {
    let { phones, loading, error } = this.state

    if (error) {
      return <Error />
    }
    if (loading || !phones) {
      return <Spinner />
    }

    return <Shop phones={phones} />
  }
}

export default ShopContainer
