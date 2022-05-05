import React from "react";
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

const breadcrumbStyle = {
  marginTop: '16px',
  marginbottom: '16px'
};

export const BreadCrumb = (props) => {
  const items = props.items
  const category = props.category

  return (
    <Container fluid>
      <Row>
        <Col style={{ fontSize: '14px' }}>
          <Breadcrumb style={breadcrumbStyle}>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{category}</Breadcrumb.Item>
            {items.map(item => (
              <Breadcrumb.Item active key={item.id}>{item.title}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};