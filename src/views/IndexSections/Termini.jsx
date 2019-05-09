import React, { Component } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import TerminCard from "../../components/TerminCard";
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
                <Row>
                  <Col>
                    <TerminCard />
                  </Col>
                  <Col>
                    <TerminCard />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TerminCard />
                  </Col>
                  <Col>
                    <TerminCard />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TerminCard />
                  </Col>
                  <Col>
                    <TerminCard />
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
