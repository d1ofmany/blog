import React from "react";

const PostBody = ({ post }) => {
  const comments = post.comments.map(comment => {
    return (
      <li key={comment.id}>
        <h5 className="comment-title">{comment.name}</h5>
        <p className="comment-body">{comment.body}</p>
        <small className="comment-author">{comment.email}</small>
      </li>
    );
  });

  return (
    <div className="PostBody">
      <h3 className="post-title">{post.title}</h3>
      <small className="post-author">{post.user.name}</small>
      <p className="post-body">{post.body}</p>
      <div className="post-comments">
        <h4>Comments</h4>
        <ul>{comments}</ul>
      </div>
    </div>
  );
};

export default PostBody;
