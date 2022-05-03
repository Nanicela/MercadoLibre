import React from "react";
import prueba from "../assets/prueba.png"

import { Container, Row, Col, Button } from 'react-bootstrap';

const img = {
  width: '680px',
  maxHeight: '680px',
}
export const ProductDetails = () => {
  return (
    <Container fluid style={{paddingBottom: '60px'}}>
      <Row className="bg-white g-0">
        <Col>
          <Row className="g-0">
            <Col className="bg-white" md={9} style={{ padding: '16px'}}>
              <img src={prueba} alt="logo" className="mx-auto d-block" style={img}></img>
            </Col>
            <Col className="bg-white" md={3} >
              <p style={{ fontSize: '14px', marginTop: '32px', marginBottom: '16px' }}>Nuevo - 234 vendidos</p>
              <h1 style={{ fontSize: '24px', marginBottom: '32px' }}>Deco Reverse <br></br>Sobrero Oxford</h1>
              <h1 style={{ fontSize: '46px', marginBottom: '32px' }}>1980</h1>
              <div className="d-grid" style={{ marginRight: '32px' }}> <Button> Comprar </Button> </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col className="bg-white" md={8}>
              <h1 style={{ fontSize: '28px', marginLeft: '32px', marginBottom: '32px' }}>Descripción del producto</h1>
              <p style={{ fontSize: '16px', marginLeft: '32px', marginBottom: '32px' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque inventore nulla enim illum nobis, suscipit doloremque expedita repellat beatae ad placeat maiores ipsum ut incidunt odit tempora excepturi delectus voluptatibus?</p>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  );
};