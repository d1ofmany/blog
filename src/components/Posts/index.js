import { connect } from "react-redux";

import { getPosts } from "../../actions/posts";
import PostsComponent from "./Posts.jsx";

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts())
  };
};

const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);

export default Posts;
