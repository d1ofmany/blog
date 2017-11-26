export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const GET_USERS = 'GET_USERS';

export const getPosts = (posts) => {
  return {
    action: GET_POSTS,
    posts
  }
}

export const getPost = (post) => {
  return {
    action: GET_POST,
    post
  }
}

export const getUsers = (users) => {
  return {
    action: GET_USERS,
    users
  }
}
