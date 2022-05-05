import { render,   } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Details from './pages/Details';
import Results from './pages/Results';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
const rootElement = document.getElementById("root");
const container = {
  backgroundColor: '#EEEEEE',
  minHeight: '100vh'
};
render(
  <BrowserRouter>
    <div style={container}>
      <Header />
      <Row>
        <Col md={10} className="mx-auto">
          <Routes>
            <Route path="items/:id" element={<Details />} />
            <Route path="items" element={<Results />} />
          </Routes>
        </Col>
      </Row>
    </div>

  </BrowserRouter>,
  rootElement
);