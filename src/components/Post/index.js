import { connect } from "react-redux";

import { getPosts, getPostComments } from "../../actions/posts";
import PostComponent from "./Post.jsx";

const mapStateToProps = state => ({
  posts: state.posts,
  post: state.post
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  getPostComments: post => dispatch(getPostComments(post))
});

const Post = connect(mapStateToProps, mapDispatchToProps)(PostComponent);

export default Post;
