import React, { Component } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import HallCard from "../../components/HallCard";
import { Row, Col } from "reactstrap";

class Termini extends Component {
  state = {};
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="section section-navbars">
          <section className="mb-4">
            <div
              style={{
                backgroundColor: "transparent",
                width: "80%",
                position: "relative",
                left: "11.5%",
                paddingTop: "20px"
              }}
              className="d-flex justify-content-center"
            >
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Termini</h1>
                </div>
                <Row>
                  <Col>
                    <HallCard />
                  </Col>
                  <Col>
                    <HallCard />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <HallCard />
                  </Col>
                  <Col>
                    <HallCard />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <HallCard />
                  </Col>
                  <Col>
                    <HallCard />
                  </Col>
                </Row>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Termini;
