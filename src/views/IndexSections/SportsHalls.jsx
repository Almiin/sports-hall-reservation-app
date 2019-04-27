import React, { Component } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import { Row, Col, Input, FormGroup, Label } from "reactstrap";
import HallCard from "../../components/HallCard";

class SportsHalls extends Component {
  state = {};
  render() {
    return (
      <>
        <IndexNavbar />
        <div id="wrapper">
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink" />
              </div>
              <div className="sidebar-brand-text mx-3">Filter</div>
            </a>

            <Row>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Badminton
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Aerobic
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <br />
            <hr className="sidebar-divider my-0" />

            <Row>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Tennis
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Table Tennis
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <br />
            <hr className="sidebar-divider my-0" />

            <Row>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Volleyball
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Basketball
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <br />
            <hr className="sidebar-divider my-0" />

            <Row>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Jiu-jitsu
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Judo
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <br />
            <hr className="sidebar-divider my-0" />

            <Row>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Wrestling
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Boxing
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <br />
            <hr className="sidebar-divider my-0" />

            <Row>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Karate
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Kickboxing
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <br />
            <hr className="sidebar-divider my-0" />

            <Row>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Taekwondo
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Futsal
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <br />
            <hr className="sidebar-divider my-0" />

            <Row>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Team handball
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Bowling
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <Row>
                  <Col sm="6">
                    <HallCard />
                  </Col>
                  <Col sm="6">
                    <HallCard />
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <HallCard />
                  </Col>
                  <Col sm="6">
                    <HallCard />
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <HallCard />
                  </Col>
                  <Col sm="6">
                    <HallCard />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SportsHalls;
