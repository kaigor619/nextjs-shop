import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useRouter } from 'next/router'
import Description from './Description'
import Spinner from '../../components/Spinner'
import Error from '../../components/Spinner'
import PhoneService from '../../service/phone-service'
import styles from './Product.module.css'
import prevArrow from './images/prev.svg'
import nextArrow from './images/next.svg'

const carouselProps = {
  indicators: false,
  prevIcon: <img className={styles.carousel_arrows} src={prevArrow} />,
  nextIcon: <img className={styles.carousel_arrows} src={nextArrow} />,
}

const CarouselComponents = ({ product }) => {
  return (
    <Carousel {...carouselProps}>
      {product.gallery.map((item) => {
        return (
          <Carousel.Item key={item}>
            <div className={styles.carousel_wrap}>
              {
                <img
                  className={styles.gallery_image}
                  src={item}
                  alt="Gallery"
                />
              }
            </div>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

const ProductContainer = ({ serverProduct, serverError }) => {
  let [product, setProduct] = useState(serverProduct)
  let [loading, setLoading] = useState(!serverProduct)
  let [error, setError] = useState(serverError)

  let router = useRouter()

  async function load() {
    let product = null

    try {
      product = await PhoneService().getPhone(router.query.id)
    } catch (err) {
      setError(err)
    }

    if (product) {
      setProduct(product)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!product) {
      load()
    } else if (product.id != router.query.id) {
      setLoading(true)
      load()
    }
  })

  if (error) {
    return <Error />
  }

  if (loading) return <Spinner />

  return (
    <div className={styles.single_page}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={styles.product_ceil}>
              <CarouselComponents product={product} />
            </div>
          </div>
          <div className="col-md-6">
            <Description product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

ProductContainer.getInitialProps = async ({ req, query }) => {
  let { id } = query
  let serverProduct = null
  if (!req) {
    return { serverProduct }
  }
  try {
    serverProduct = await PhoneService().getPhone(id)
  } catch (error) {
    return { serverError }
  }

  return { serverProduct }
}

export default ProductContainer
