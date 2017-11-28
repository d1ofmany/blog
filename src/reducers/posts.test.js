import postsReducer from "./posts";
import { GET_POSTS, GET_POST } from "../actions/posts";

import { posts, post } from "../testData";

describe("postsReducer reducer", () => {
  const initialState = {
    posts: [],
    post: null
  };

  it("should handle undefined", () => {
    expect(postsReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle GET_POSTS", () => {
    expect(postsReducer(undefined, { posts, type: GET_POSTS })).toEqual({
      posts,
      post: null
    });
  });

  it("should handle GET_POST", () => {
    expect(postsReducer(undefined, { post, type: GET_POST })).toEqual({
      posts: [],
      post
    });
  });
});
