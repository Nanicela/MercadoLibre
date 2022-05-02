import React from "react";
import logo from "../assets/Logo_ML.png"
import search from "../assets/ic_Search.png"

import { Navbar, Form, FormControl, InputGroup, Row, Col } from 'react-bootstrap';

const headerStyle = {
  backgroundColor: '#FFE600',
  color: '#999999 !important'
};

export const Header = () => {
  return (                                      
    <Navbar style={headerStyle} >
        <Row className="w-100">
          <Col md={2} className="d-flex justify-content-end">
            <Navbar.Brand >
              <img
                src={logo}
                width="60"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
          </Col>
          <Col md={9} className="d-flex align-items-center">
            <Form className="w-100">
              <InputGroup>
                <FormControl
                  type="search"
                  placeholder="Nunca dejes de buscar"
                  aria-label="Search"
                  aria-describedby="btnGroupAddon"
                  style={{ fontSize: 18 }}
                />
                <InputGroup.Text id="btnGroupAddon">  <img
                  src={search}
                  alt="logo"
                /> </InputGroup.Text>
              </InputGroup>
            </Form>
          </Col>
        </Row>
    </Navbar>
  );
};