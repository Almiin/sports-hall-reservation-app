import React, { Component } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import TournamentCard from "components/TournamentCard.jsx";

class Tournaments extends Component {
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
                width: "100%",
                position: "relative",
                paddingTop: "20px"
              }}
              className="d-flex justify-content-center"
            >
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Tournaments</h1>
                </div>
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
