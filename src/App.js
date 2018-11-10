import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import { About, Home } from "./pages";
import { AppBar } from "./components";

const styles = theme => {
  return {
    content: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 1280,
      paddingTop: 64 + 16,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    }
  };
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff4702",
      main: "#E53F00",
      dark: "#ce3800",
      contrastText: "#fff"
    }
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div>
            <AppBar />
            <div className={classes.content}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
