import React, { Component } from "react";

import PostItem from "./PostItem";

import './Posts.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  componentWillMount() {
    this.props.getPosts();
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { posts } = this.props;

    const PostItems = posts
      .filter(post =>
        post.user.name.toLowerCase().match(this.state.search.toLowerCase())
      )
      .map(post => <PostItem key={post.id} post={post} />);
      
    const NoPosts = <PostItem post={{title: "No posts"}} />;

    return (
      <div className="Posts">
        <div className="Search">
          <input
            className="Search-input-text"
            type="text"
            value={this.state.search}
            placeholder="Filter post by author"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <ul className="PostItems">
            {PostItems.length > 0 ? PostItems : NoPosts}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
