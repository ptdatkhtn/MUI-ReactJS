import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { Post, Loading } from "../../components";
import { apiPaths } from "../../paths";

class Home extends Component {
  state = {
    loading: true,
    totalPages: null,
    perPage: null,
    currentPage: null,
    posts: []
  };

  componentDidMount() {
    fetch(`${apiPaths.search}?&tags=front_page`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          posts: data.hits,
          loading: false,
          totalPages: data.nbPages,
          perPage: data.hitsPerPage,
          currentPage: data.page + 1
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <Paper>
        {this.state.loading && <Loading />}
        {!this.state.loading &&
          this.state.posts.map(p => (
            <div key={p.objectID}>
              <Post
                postId={p.objectID}
                title={p.title}
                link={p.url}
                upVote={p.points}
                created={p.created_at_i}
                author={p.author}
                comments={p.num_comments}
              />
              <Divider />
            </div>
          ))}
      </Paper>
    );
  }
}

export default Home;
