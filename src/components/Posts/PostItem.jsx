import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <li className="PostItem">
      <h3 className="post-title">{post.title}</h3>
      <small className="post-author">{post.user.name}</small>
      <p className="post-body">{post.body}</p>
      <Link to={`/post/${post.id}`}>Show more</Link>
    </li>
  );
};

export default PostItem;
