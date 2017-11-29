import React, { Component } from "react";

import PostItem from "./PostItem";

import "./Posts.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      showNumber: 5
    };
  }

  componentWillMount() {
    this.props.getPosts();
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleClick() {
    this.setState({ showNumber: this.state.showNumber + 5 });
  }

  render() {
    const { posts } = this.props;

    const PostItems = posts
      .slice(0, this.state.showNumber)
      .filter(post =>
        post.user.name.toLowerCase().match(this.state.search.toLowerCase())
      )
      .map(post => <PostItem key={post.id} post={post} />);

    const NoPosts = <PostItem post={{ title: "No posts" }} />;

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
        {this.state.showNumber < this.props.posts.length && (
          <div className="PostMore">
            <a className="PostMore-link" onClick={() => this.handleClick()}>
              More Posts
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
