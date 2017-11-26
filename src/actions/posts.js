import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS,
    posts
  }
}

export const getPosts = () => {
  return dispatch => {
    return Promise
      .all([
        axios.get('http://jsonplaceholder.typicode.com/posts'),
        axios.get('http://jsonplaceholder.typicode.com/users')
      ])
      .then(function (response) {
        const users = response[1].data.reduce((newUsers, user) => {
          if (!newUsers[user.id]) newUsers[user.id] = user;
          return newUsers;
        }, {});

        const posts = response[0].data.map((post) => {
          return {...post, user: users[post.userId]};
        });

        dispatch(getPostsSuccess(posts));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}

export const getPost = (post) => {
  return {
    type: GET_POST,
    post
  }
}
