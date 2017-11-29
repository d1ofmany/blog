import React from "react";

import "./PostBody.css";

const PostBody = ({ post }) => {
  const comments = post.comments.map(comment => {
    return (
      <li className="PostComment" key={comment.id}>
        <h5 className="PostComment-title">{comment.name}</h5>
        <p className="PostComment-author">Author: {comment.email}</p>
        <p className="PostComment-body">{comment.body}</p>
      </li>
    );
  });

  return (
    <div className="PostBody">
      <div className="PostContent">
        <h3 className="PostContent-title">{post.title}</h3>
        <small className="PostContent-author">{post.user.name}</small>
        <p className="PostContent-body">{post.body}</p>
      </div>
      <div className="PostComments">
        <h4>Comments</h4>
        <ul className="PostComments-list">{comments}</ul>
      </div>
    </div>
  );
};

export default PostBody;
