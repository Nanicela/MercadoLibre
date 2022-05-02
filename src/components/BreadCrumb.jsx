import React from "react";
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

const breadcrumbStyle = {
  marginTop: '16px',
  marginbottom: '16px'
};

export const BreadCrumb = () => {
  return (
    <Container fluid>
      <Row>
        <Col style={{ fontSize: '14px' }}>
          <Breadcrumb style={breadcrumbStyle}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};