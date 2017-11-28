import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";

import {
  GET_POSTS,
  GET_POST,
  getPosts,
  getPostComments,
  getPostSuccess,
  getPostsSuccess
} from "./posts";

import { posts, post } from "../testData";

describe("actions", () => {
  it("should create action GET_POSTS", () => {
    const expectedAction = {
      type: GET_POSTS,
      posts
    };

    expect(getPostsSuccess(posts)).toEqual(expectedAction);
  });

  it("should create action GET_POST", () => {
    const expectedAction = {
      type: GET_POST,
      post
    };

    expect(getPostSuccess(post)).toEqual(expectedAction);
  });
});

describe("async actions", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("creates GET_POSTS when fetching posts is done", () => {
    axios.get = jest
      .fn()
      .mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
          resolve({ data: posts });
        });
      })
      .mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
          resolve({ data: [posts[0].user, posts[1].user] });
        });
      });

    const expectedActions = [{ type: GET_POSTS, posts }];

    const store = mockStore({ posts: [] });

    return store.dispatch(getPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates GET_POST when fetching post is done", () => {
    axios.get = jest.fn(() => {
      return new Promise((resolve, reject) => {
        resolve({ data: post.comments });
      });
    });

    const expectedActions = [{ type: GET_POST, post }];

    const store = mockStore({ post: null });

    return store.dispatch(getPostComments(posts[0])).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
