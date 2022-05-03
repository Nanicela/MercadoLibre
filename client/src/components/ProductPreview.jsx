import React from "react";
import prueba from "../assets/prueba.png"
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
  console.log(props.product)
  const prod = props.product
  return (
    <Container fluid>
      <Row className="bg-white g-0" style={line}>
        <Col md={2} style={{ borderRadius: '4px',  padding: '16px'}}>
          <Image src={prod.thumbnail} alt="logo" style={img}></Image>
        </Col>
        <Col md={8}  style={{ paddingLeft: '16px'}} >
          <p style={price}>  {new Intl.NumberFormat(`es-${prod.seller_address.country.id}`, { style: 'currency', currency: prod.currency_id, maximumFractionDigits: 0 }).format(prod.price) } <img src={ic_shipping} alt="logo"></img></p>
          <p style={{ fontSize: '18px' }}> {prod.title}</p>
          <p style={{ fontSize: '18px' }}> Completo unico</p>
        </Col>
        <Col md={2} className="d-flex justify-content-start align-items-center">
          <p  style={{ fontSize: '12px', color: '#999999' }}>{prod.address.state_name}</p>
        </Col>
      </Row>
    </Container>
  );
};
  