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

class Termini extends Component {
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

          <ImageGallery items={images} src="" alt="" />
          <CardMedia />
          <CardContent>
            <ul>
              <li style={{ color: "#525f7f" }}>Sarajevo</li>
              <li style={{ color: "#525f7f" }}>Zvornička 27</li>
              <li style={{ color: "#525f7f" }}>tel: 033 492-666</li>
            </ul>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Button variant="outline-primary">Reserve</Button>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Osim za dvoranske sportove, dvorana je osposobljena i za
                organiziranje kulturnih, sajamskih i ostalih sadržaja Pored
                velike dvorane, objekat sadrži i podzemnu garažu, prostorije
                predviđene za kuglanu i streljanu, malu salu za stoni tenis i
                borilačke sportove, svlačionice i ostale pomoćne prostorije za
                sportiste, VIP lože, salu za fitnes, kao i novinarske kabine i
                prostorije za upravu.
              </Typography>
              <Typography paragraph>
                U samoj dvorani postavljene su tribine sa oko 1.500 sjedećih
                mjesta, koševi, golovi, mreža za odbojku, strunjače, semafori i
                sva dodatna oprema. Dvorana je multifunkcionalna, te je
                namijenjena kako za održavanje sportskih, tako i kulturnih
                manifestacija.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <br />
      </>
    );
  }
}

Termini.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Termini);
