import React from "react";
import ic_shipping from "../assets/ic_shipping.png"

import { Container, Row, Col, Image } from 'react-bootstrap';

const img = {
  width: '180px',
  height: '180px',
  borderRadius: '4px',
  objectFit: 'cover',
}

const price = {
  fontSize: '24px',
  marginBottom: '32px',
  marginTop: '32px'
}

const line = {
  borderBottom: '1px solid #EEEEEE',
}
export const ProductPreview = (props) => {
  const prod = props.product
  return (
    <Container fluid>
      <Row className="bg-white g-0 position-relative" style={line} itemScope itemType="https://schema.org/Product">
        <Col md={2} style={{ borderRadius: '4px', padding: '16px' }}>
          <Image src={prod.picture} alt="logo" style={img} itemProp="image"></Image>
        </Col>
        <Col md={8} style={{ paddingLeft: '16px' }} >
          <p style={price} itemScope itemType="https://schema.org/Offer" itemProp="price">  {new Intl.NumberFormat(`es-${prod.country_id}`, { style: 'currency', currency: prod.price.currency, maximumFractionDigits: 0}).format(prod.price.amount)} {prod.free_shipping ? <img src={ic_shipping} alt="logo"></img> : ""}</p>
          <a style={{ fontSize: '18px', textDecoration: 'none' }} href={`/items/${prod.id}`} className="stretched-link text-dark pb-3 d-block" itemProp="name">{prod.title}</a>
          <p style={{ fontSize: '18px' }}> {prod.condition}</p>
        </Col>
        <Col md={2} className="d-flex justify-content-start align-items-center">
          <p style={{ fontSize: '12px', color: '#999999' }} itemProp="countryOfOrigin">{prod.address.state_name}</p>
        </Col>
      </Row>
    </Container>
  );
};
