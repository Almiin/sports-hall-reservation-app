import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Modal,
  Form,
  Input,
  InputGroup,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Label
} from "reactstrap";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
      formModal: false,
      signupModal: false
    };
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              tag={Link}
            >
              Sports Hall Reservation App
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    SHRA•Menu
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  tag={Link}
                  to="/home"
                  rel="noopener noreferrer"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  tag={Link}
                  to="/sports-halls"
                  rel="noopener noreferrer"
                >
                  Sports Halls
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  Events
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem tag={Link} to="/tournaments">
                    <i className="tim-icons icon-trophy" />
                    Tournaments
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/termini">
                    <i className="tim-icons icon-user-run" />
                    Termini
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  tag={Link}
                  to="/find"
                  rel="noopener noreferrer"
                >
                  Sports Halls Map
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  tag={Link}
                  to="/contact"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </NavLink>
              </NavItem>
              <br />
              <NavItem className="p-0" style={{ marginBottom: "5px" }}>
                <Button
                  className="nav-link d-lg-block"
                  onClick={() => this.toggleModal("formModal")}
                >
                  <i className="fas fa-sign-in-alt" /> Sign in
                </Button>
              </NavItem>
              <NavItem className="p-0">
                <Button
                  className="nav-link d-lg-block"
                  onClick={() => this.toggleModal("signupModal")}
                >
                  <i className="fas fa-user-plus" /> Sign up
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
        <Modal
          modalClassName="modal-black"
          isOpen={this.state.formModal}
          toggle={() => this.toggleModal("formModal")}
        >
          <div className="modal-header justify-content-center">
            <button
              className="close"
              onClick={() => this.toggleModal("formModal")}
            >
              <i className="tim-icons icon-simple-remove text-white" />
            </button>
            <div className="text-muted text-center ml-auto mr-auto">
              <h3 className="mb-0">Sign in</h3>
            </div>
          </div>
          <div className="modal-body">
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <img alt="..." src={require("assets/img/github.svg")} />
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <img alt="..." src={require("assets/img/google.svg")} />
              </Button>
            </div>
            <div className="text-center text-muted mb-4 mt-2" />
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup
                  className={classnames("input-group-alternative", {
                    "input-group-focus": this.state.emailFocus
                  })}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-email-85" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    onFocus={e => this.setState({ emailFocus: true })}
                    onBlur={e => this.setState({ emailFocus: false })}
                  />
                </InputGroup>
                <InputGroup
                  className={classnames("input-group-alternative", {
                    "input-group-focus": this.state.passwordFocus
                  })}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-key-25" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    onFocus={e => this.setState({ passwordFocus: true })}
                    onBlur={e => this.setState({ passwordFocus: false })}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup check className="mt-3">
                <Label check>
                  <Input defaultChecked type="checkbox" />
                  <span className="form-check-sign" />
                  Remember me!
                </Label>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Sign in
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
        <Modal
          modalClassName="modal-black"
          isOpen={this.state.signupModal}
          toggle={() => this.toggleModal("signupModal")}
        >
          <div className="modal-header justify-content-center">
            <button
              className="close"
              onClick={() => this.toggleModal("signupModal")}
            >
              <i className="tim-icons icon-simple-remove text-white" />
            </button>
            <div className="text-muted text-center ml-auto mr-auto">
              <h3 className="mb-0">Sign up</h3>
            </div>
          </div>
          <div className="modal-body">
            <Form role="form">
              <InputGroup
                className={classnames({
                  "input-group-focus": this.state.fullNameFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-single-02" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Full Name"
                  type="text"
                  onFocus={e => this.setState({ fullNameFocus: true })}
                  onBlur={e => this.setState({ fullNameFocus: false })}
                />
              </InputGroup>
              <InputGroup
                className={classnames({
                  "input-group-focus": this.state.emailFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-email-85" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email"
                  type="text"
                  onFocus={e => this.setState({ emailFocus: true })}
                  onBlur={e => this.setState({ emailFocus: false })}
                />
              </InputGroup>
              <InputGroup
                className={classnames({
                  "input-group-focus": this.state.passwordFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-lock-circle" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Password"
                  type="text"
                  onFocus={e => this.setState({ passwordFocus: true })}
                  onBlur={e => this.setState({ passwordFocus: false })}
                />
              </InputGroup>
              <InputGroup
                className={classnames({
                  "input-group-focus": this.state.passwordFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-lock-circle" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Confirm password"
                  type="text"
                  onFocus={e => this.setState({ passwordFocus: true })}
                  onBlur={e => this.setState({ passwordFocus: false })}
                />
              </InputGroup>
              <FormGroup check className="text-left">
                <Label check>
                  <Input type="checkbox" />
                  <span className="form-check-sign" />I agree to the{" "}
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    terms and conditions
                  </a>
                  .
                </Label>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Sign up
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
