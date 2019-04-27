import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";

class ContactUs extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("contact");
  }
  componentWillUnmount() {
    document.body.classList.toggle("contact");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="section section-navbars">
          <section
            className="mb-4"
            style={{
              paddingTop: "20px"
            }}
          >
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Contact us
            </h2>
            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>

            <div
              className="row"
              style={{ marginLeft: "2px", marginRight: "2px" }}
            >
              <div className="col-md-9 mb-md-0 mb-5">
                <form
                  id="contact-form"
                  name="contact-form"
                  action="mail.php"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                        />
                        <label
                          style={{ top: ".10rem" }}
                          htmlFor="name"
                          className=""
                        >
                          Your name
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                        />
                        <label
                          style={{ top: ".10rem" }}
                          htmlFor="email"
                          className=""
                        >
                          Your email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                        />
                        <label
                          style={{ top: ".10rem" }}
                          htmlFor="subject"
                          className=""
                        >
                          Subject
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="2"
                          className="form-control md-textarea"
                          style={{ padding: 0 }}
                        />
                        <label
                          style={{ top: ".10rem" }}
                          htmlFor="message"
                          className=""
                        >
                          Your message
                        </label>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="text-center text-md-left">
                  <a className="btn btn-primary">Send</a>
                </div>
                <div className="status" />
              </div>

              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x" />
                    <p>San Francisco, CA 94126, USA</p>
                  </li>

                  <li>
                    <i className="fas fa-phone mt-4 fa-2x" />
                    <p>+ 01 234 567 89</p>
                  </li>

                  <li>
                    <i className="fas fa-envelope mt-4 fa-2x" />
                    <p>contact@mdbootstrap.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default ContactUs;
