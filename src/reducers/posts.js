import {GET_POSTS, GET_USERS, GET_POST} from '../actions/posts';

const initialState = {
  posts: [],
  users: [],
  post: null
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {...state, posts: [action.posts]};
    case GET_USERS:
      return {...state, users: [action.users]}
    case GET_POST:
      return {...state, post: action.post}
    default:
      return state;
  }
};

export default postsReducer;