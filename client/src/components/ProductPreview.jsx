import React from "react";
import prueba from "../assets/prueba.png"
import ic_shipping from "../assets/ic_shipping.png"

import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

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

export const ProductPreview = () => {
  return (
    <Container fluid>
      <Row className="bg-white g-0">
        <Col md={2} style={{ borderRadius: '4px',  padding: '16px'}}>
          <img src={prueba} alt="logo" style={img}></img>
        </Col>
        <Col md={8}  style={{ paddingLeft: '16px'}} >
          <p style={price}> 1890 <img src={ic_shipping} alt="logo"></img></p>
          <p style={{ fontSize: '18px' }}> Banco Redondo Taburete Banqueta De Pino Natural 60cm </p>
          <p style={{ fontSize: '18px' }}> Completo unico</p>
        </Col>
        <Col md={2} className="d-flex justify-content-start align-items-center">
          <p  style={{ fontSize: '12px', color: '#999999' }}>Ubicación</p>
        </Col>
      </Row>
    </Container>
  );
};
  