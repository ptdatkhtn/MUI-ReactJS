import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconComment from "@material-ui/icons/Comment";
import { routePaths } from "../../paths";

const styles = theme => {
  const upSize = "48px";
  return {
    wrap: {
      display: "flex",
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    },
    up: {
      backgroundColor: theme.palette.primary.main,
      width: upSize,
      height: upSize,
      lineHeight: upSize,
      textAlign: "center",
      color: theme.palette.common.white,
      borderRadius: "50%",
      flexBasis: upSize,
      minWidth: upSize,
      boxShadow: theme.shadows[2]
    },
    title: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      "& a": { color: "inherit", textDecoration: "none" },
      "& a:visited": { color: theme.palette.grey[500] }
    },
    comment: {
      alignItems: "flex-end",
      marginLeft: "auto",
      display: "flex",
      "& a": { color: "inherit", textDecoration: "none" }
    },
    commentCount: {
      width: 30,
      color: "inherit",
      marginLeft: theme.spacing.unit
    },
    author: {
      marginTop: theme.spacing.unit,
      color: theme.palette.grey[500],
      "& > span": {
        color: theme.palette.primary.main
      }
    }
  };
};

function Post({
  classes,
  link,
  upVote,
  title,
  created,
  author,
  comments,
  postId
}) {
  return (
    <div className={classes.wrap}>
      <div className={classes.up}>{upVote}</div>
      <div className={classes.title}>
        <Typography variant="title">
          <a className={classes.linkTitle} href={link}>
            {title}
          </a>
        </Typography>

        <Typography className={classes.author}>
          <span>
            <TimeAgo date={created * 1000} />
          </span>{" "}
          by {author}
        </Typography>
      </div>
      <div className={classes.comment}>
        <Link to={routePaths.post.build(postId)}>
          <Button color="primary">
            <IconComment />
            <Typography className={classes.commentCount}>{comments}</Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
}

Post.propTypes = {
  postId: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  upVote: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired
};

export default withStyles(styles)(Post);
