import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconHot from "@material-ui/icons/Whatshot";
import IconSearch from "@material-ui/icons/Search";
import { Logo } from "./components";

const styles = {
  logo: {
    fontSize: 30,
    height: 30
  },
  menu: {
    marginLeft: "auto"
  },
  iconMenu: {
    marginLeft: 5
  }
};

class AppBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiAppBar>
        <Toolbar>
          <div className={classes.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className={classes.menu}>
            <Button color="inherit">
              Hot
              <IconHot className={classes.iconMenu} />
            </Button>
            <Button color="inherit">New</Button>
            <Button color="inherit">
              Search
              <IconSearch className={classes.iconMenu} />
            </Button>
          </div>
        </Toolbar>
      </MuiAppBar>
    );
  }
}

export default withStyles(styles)(AppBar);
