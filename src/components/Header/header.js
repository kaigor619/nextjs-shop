import React from 'react'
import Basket from './basket'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col className="col-auto d-flex align-items-center">
            <Link href="/">
              <a className="store-title">ReStore</a>
            </Link>
          </Col>
          <Col className="col-auto d-flex justify-content-end">
            <Basket />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
