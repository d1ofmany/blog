import { connect } from 'react-redux';

import { getPosts } from '../../actions/posts';
import HomeComponent from './Home.jsx';

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;