import React, { Component } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import dvorana from "../assets/img/dvorana.jpg";
import { Button } from "reactstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Row, Col } from "reactstrap";

const styles = theme => ({
  card: {
    maxWidth: 440
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

class TerminCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const images = [
      {
        original: dvorana
      },
      {
        original: dvorana
      },
      {
        original: dvorana
      },
      {
        original: dvorana
      },
      {
        original: dvorana
      }
    ];

    return (
      <>
        <IndexNavbar />
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="Recipe"
                className={classes.avatar}
                src={dvorana}
              />
            }
            title="Dvorana Grbavica"
          />

          <img src={dvorana} alt="" />
          <CardMedia />
          <CardContent>
            <Row>
              <Col>
                <ul>
                  <li style={{ color: "#525f7f" }}>Sarajevo</li>
                  <li style={{ color: "#525f7f" }}>Zvornička 27</li>
                  <li style={{ color: "#525f7f" }}>tel: 033 492-666</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li style={{ color: "#525f7f" }}>Igraci: 10</li>
                  <li style={{ color: "#525f7f" }}>Vrijeme: 15:20 - 16:35</li>
                  <li style={{ color: "#525f7f" }}>Cijena: 70 KM</li>
                </ul>
              </Col>
            </Row>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <div style={{ textAlign: "right", width: "100%", padding: "0" }}>
              <Button variant="outline-primary">Join</Button>{" "}
            </div>

            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            />
          </CardActions>
        </Card>
        <br />
      </>
    );
  }
}

TerminCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TerminCard);
