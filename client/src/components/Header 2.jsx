import React from "react";
import logo from "../assets/Logo_ML.png"
import search from "../assets/ic_Search.png"
import { BreadCrumb } from "./../components/BreadCrumb";
import axios from "axios";
import ProductPreview from './../components/ProductPreview'

import { Navbar, Form, FormControl, InputGroup, Row, Col, Button } from 'react-bootstrap';

const headerStyle = {
  backgroundColor: '#FFE600',
  color: '#999999 !important'
};

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', results: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.search()
  }

  search() {
    axios.get('http://localhost:3001/search', {
      withCredentials: false,
      params: {
        keyword: this.state.value,
        limit: 4
      }
    }).then(res => {
      this.setState({ results: res.data.success.results })
    }).catch(err => {
      console.log(err)
    })
  };

  render() {
    return (
      <>
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
              <Form className="w-100" onSubmit={this.handleSubmit}>
                <InputGroup>
                  <FormControl
                    type="search"
                    placeholder="Nunca dejes de buscar"
                    aria-label="Search"
                    aria-describedby="btnGroupAddon"
                    style={{ fontSize: 18 }}
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                  <Button id="btnGroupAddon" type="submit" value="Submit"> <img
                    src={search}
                    alt="logo"
                  /> </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Navbar>
        <Row>
          <Col md={10} className="mx-auto">
            <BreadCrumb />
          </Col>
        </Row>
      </>
    );

  }
}

export default Header;

