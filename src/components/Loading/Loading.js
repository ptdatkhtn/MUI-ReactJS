import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  wrap: {
    padding: theme.spacing.unit * 2,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

function Loading({ classes }) {
  return <CircularProgress className={classes.wrap} />;
}

export default withStyles(styles)(Loading);
