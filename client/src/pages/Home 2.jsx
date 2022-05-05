

import React from "react";
import { Header } from "./../components/Header";
import { Results } from "./../components/Results";
import { Details } from "./../components/Details";
import { BreadCrumb } from "./../components/BreadCrumb";
import { Row, Col } from "react-bootstrap";

const container = {
  backgroundColor: '#EEEEEE',
  minHeight: '100vh'
};
const Home = () => {
  return (
    <div style={container}>
      <Header />
      <Row>
        <Col md={10} className="mx-auto">
          <BreadCrumb />
          <Results />
          <Details />
        </Col>
      </Row>

    </div>
  );
};

export default Home;