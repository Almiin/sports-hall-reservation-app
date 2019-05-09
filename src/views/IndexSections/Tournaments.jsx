import React, { Component } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import TournamentCard from "components/TournamentCard.jsx";

class Tournaments extends Component {
  state = {};
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="section section-navbars" style={{ paddingTop: "80px" }}>
          <section className="mb-4" style={{ backgroundColor: "white" }}>
            <div
              style={{
                backgroundColor: "transparent",
                width: "100%",
                position: "relative",
                paddingTop: "20px"
              }}
              className="d-flex justify-content-center"
            >
              <div className="container-fluid">
                <TournamentCard />
                <TournamentCard />
                <TournamentCard />
                <TournamentCard />
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Tournaments;
