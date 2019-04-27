import React, { Component } from "react";
import { Button, Media } from "reactstrap";
import dvorana from "../assets/img/dvorana.jpg";

class TournamentCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <br />
        <Media
          style={{
            border: "0.5px solid white",
            borderRadius: "10px",
            padding: "15px"
          }}
          id="kartica"
        >
          <Media left href="#">
            <img
              id="slika"
              src={dvorana}
              style={{ height: "150px" }}
              alt="haha"
            />
          </Media>
          <Media body>
            <Media heading>Internacionalni Nogometni Turniri Šampion</Media>
            Dječji nogometni turnir na umjetnim i travnatim terenima za
            kategorije:
            <br /> '06, '08, '10 Kategorije – muški U9 (2010.god. i mlađi)
            sistem igre 6+1, pola igrališta U11(2008.god.i mlađi) sistem igre
            8+1, pola igrališta U13(2006.god.i mlađi) sistem igre 10+1, cijelo
            igralište
          </Media>
          <Button id="dugme" style={{ marginTop: "60px" }}>
            Join
          </Button>
        </Media>

        <br />
      </div>
    );
  }
}

export default TournamentCard;
