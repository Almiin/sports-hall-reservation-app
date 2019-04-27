import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";

import ContactUs from "views/IndexSections/ContactUs.jsx";
import SportsHalls from "views/IndexSections/SportsHalls.jsx";
import Tournaments from "views/IndexSections/Tournaments.jsx";
import Termini from "views/IndexSections/Termini.jsx";
import SportsHallsMap from "views/IndexSections/SportsHallsMap.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={props => <Index {...props} />} />
      <Route path="/contact" render={props => <ContactUs {...props} />} />
      <Route
        path="/sports-halls"
        render={props => <SportsHalls {...props} />}
      />
      <Route path="/tournaments" render={props => <Tournaments {...props} />} />
      <Route path="/termini" render={props => <Termini {...props} />} />
      <Route path="/find" render={props => <SportsHallsMap {...props} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
