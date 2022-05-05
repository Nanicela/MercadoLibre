import React from "react";

import { Container, Row, Col, Button } from 'react-bootstrap';

const img = {
  width: '680px',
  maxHeight: '680px',
}
export const ProductDetails = (props) => {
  const prod = props.product.item
  return (
    <Container fluid style={{paddingBottom: '60px'}}>
      <Row className="bg-white g-0" itemScope itemType="https://schema.org/Product">
        <Col>
          <Row className="g-0">
            <Col className="bg-white" md={9} style={{ padding: '16px'}}>
              <img src={prod.picture} alt="logo" className="mx-auto d-block" style={img} itemProp="image"></img>
            </Col>
            <Col className="bg-white" md={3} >
              <p style={{ fontSize: '14px', marginTop: '32px', marginBottom: '16px' }}>{prod.condition} - {prod.sold_quantity} vendidos</p>
              <h1 style={{ fontSize: '24px', marginBottom: '32px' }}>{prod.title}</h1>
              <h1 style={{ fontSize: '46px', marginBottom: '32px' }}> {new Intl.NumberFormat(`es-${prod.country_id}`, { style: 'currency', currency: prod.currency, maximumFractionDigits: 0}).format(prod.price.amount)}</h1>
              <div className="d-grid" style={{ marginRight: '32px' }}> <Button> Comprar </Button> </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col className="bg-white" md={8}>
              <h1 style={{ fontSize: '28px', marginLeft: '32px', marginBottom: '32px' }}>Descripción del producto</h1>
              <p style={{ fontSize: '16px', marginLeft: '32px', marginBottom: '32px' }} itemProp="description">{prod.description}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};