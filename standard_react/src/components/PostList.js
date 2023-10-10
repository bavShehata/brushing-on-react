import React, { Component } from "react";
import axios from "axios";

export class PostList extends Component {
  state = {
    posts: [],
    errorMsg: "",
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts1")
      .then((res) => {
        console.log(res);
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: err.message,
        });
      });
  }
  render() {
    return (
      <div>
        List of posts
        {this.state.posts.length
          ? this.state.posts.map((post) => (
              <div key={post.id}>{post.title}</div>
            ))
          : null}
        {this.state.errorMsg ? <div>{this.state.errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
