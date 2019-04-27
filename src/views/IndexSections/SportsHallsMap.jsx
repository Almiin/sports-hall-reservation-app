import React, { Component } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";

class SportsHallsMap extends Component {
  state = {};
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="section section-navbars">
          <section className="mb-6">
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Sports Halls Map
            </h2>
          </section>
          <section
            className="mbr-section form4 cid-qv7rl9AWVJ"
            id="form4-6x"
            data-rv-view="6024"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <div className="icon-block pb-3">
                      <span className="icon-block__icon">
                        <span
                          className="mbri-letter mbr-iconfont"
                          media-simple="true"
                        />
                      </span>
                      <h4
                        className="icon-block__title align-left mbr-fonts-style display-5"
                        style={{ paddingTop: "50px" }}
                      >
                        Here is the map of all sports halls in Sarajevo.
                      </h4>
                      <br />
                      <br />
                      <form className="form-inline md-form form-sm mt-0">
                        <i className="fas fa-search" aria-hidden="true" />
                        <input
                          className="form-control form-control-sm ml-3 w-75"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="iframe-container">
                    <iframe
                      frameBorder="0"
                      style={{ border: 0 }}
                      width="650"
                      height="420"
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Vijecnica+Sarajevo+Bosnia+Herzegovina"
                      allowFullScreen=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default SportsHallsMap;
