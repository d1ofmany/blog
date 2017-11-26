import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import PostItem from './PostItem';

const PostItem = ({post}) => {
  return (
    <li>
      <h3>{post.title}</h3>
      <small>{post.user.name}</small>
      <p>{post.body}</p>
      <Link to={`/post/${post.id}`}>Show more</Link>
    </li>
  );
}

class Home extends Component {

  componentWillMount () {
    this.props.getPosts();
  }
  
  render () {

    const { posts } = this.props;

    console.log(posts);

    const PostItems = posts ? posts.map(post => <PostItem key={post.id} post={post} />) : 'No posts';
    
    return (
      <div>
        <h1>Home</h1>
        <div>
          {PostItems}
        </div>
      </div>
    );
  }
}

export default Home;
