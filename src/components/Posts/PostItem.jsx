import React from "react";
import { Link } from "react-router-dom";

import './PostItem.css';

const PostItem = ({ post }) => {
  
  if (!(post.body && post.user && post.id)) {
    return (<li className="PostItem">
      <article>
        <h3 className="PostItem-title">{post.title}</h3>
      </article>
    </li>)
  }
  return (
    <li className="PostItem">
      <article>
        <h3 className="PostItem-title">{post.title}</h3>
        <p className="PostItem-author">Author: {post.user.name}</p>
        <p className="PostItem-body">{post.body}</p>
        <div className="PostItem-navigation">
          <Link className="PostItem-link" to={`/post/${post.id}`}>Show more</Link>
        </div>
      </article>
    </li>
  );
};

export default PostItem;
