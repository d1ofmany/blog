import React, { Component } from "react";

import PostBody from "./PostBody";
import Loading from "./Loading";

import './Post.css';

class Post extends Component {
  componentWillMount() {
    if (!this.props.posts.length > 0) {
      this.props.getPosts();
    } else {
      this.getPostData(this.props.posts);
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.posts.length > 0 && !nextProps.post) {
      this.getPostData(nextProps.posts);
    }
  }

  getPostData(posts) {
    const postId = parseInt(this.props.match.params.id, 10);
    const post = posts.find(post => post.id === postId);
    if (post) {
      this.props.getPostComments(post);
    }
  }

  render() {
    const { post } = this.props;
    const postId = parseInt(this.props.match.params.id, 10);

    return (
      <div className="Post">
        {post && post.id === postId ? <PostBody post={post} /> : <Loading />}
      </div>
    );
  }
}

export default Post;
