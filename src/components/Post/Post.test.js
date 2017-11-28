import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import Post from "./Post.jsx";
import { posts, post } from "../../testData";

describe("PostComponent", () => {
  let shallowWrapper;

  describe("on empty props", () => {
    let props = {
      posts: [],
      post: null,
      match: { params: { id: 1 } },
      getPosts: jest.fn()
    };

    beforeEach(() => {
      shallowWrapper = shallow(<Post {...props} />);
    });

    afterEach(() => {
      props.getPosts.mockClear();
    });

    it("contains Loading component", () => {
      expect(shallowWrapper.find("Loading").length).toEqual(1);
    });

    it("action getPosts is called", () => {
      expect(props.getPosts.mock.calls.length).toEqual(1);
    });
  });

  describe("when posts are fetched", () => {
    let propsWithoutPost = {
      posts,
      post: null,
      match: { params: { id: 1 } },
      getPosts: jest.fn(),
      getPostComments: jest.fn()
    };
    beforeEach(() => {
      shallowWrapper = shallow(<Post {...propsWithoutPost} />);
    });

    afterEach(() => {
      propsWithoutPost.getPostComments.mockClear();
    });

    it("contains Loading component", () => {
      expect(shallowWrapper.find("Loading").length).toEqual(1);
    });

    it("action getPosts is NOT called", () => {
      expect(propsWithoutPost.getPosts.mock.calls.length).toEqual(0);
    });

    it("action getPostComments is called", () => {
      expect(propsWithoutPost.getPostComments.mock.calls.length).toEqual(1);
    });
  });

  describe("when posts are fetched", () => {
    let propsWithPost = {
      posts,
      post,
      match: { params: { id: 1 } },
      getPosts: jest.fn(),
      getPostComments: jest.fn()
    };
    beforeEach(() => {
      shallowWrapper = shallow(<Post {...propsWithPost} />);
    });

    afterEach(() => {
      propsWithPost.getPostComments.mockClear();
    });

    it("contains PostBody component", () => {
      expect(shallowWrapper.find("PostBody").length).toEqual(1);
    });

    it("action getPosts is NOT called", () => {
      expect(propsWithPost.getPosts.mock.calls.length).toEqual(0);
    });

    it("action getPostComments is called", () => {
      expect(propsWithPost.getPostComments.mock.calls.length).toEqual(1);
    });
  });

  describe("when posts are fetched", () => {
    let propsWithWrongPost = {
      posts,
      post,
      match: { params: { id: 2 } },
      getPosts: jest.fn(),
      getPostComments: jest.fn()
    };
    beforeEach(() => {
      shallowWrapper = shallow(<Post {...propsWithWrongPost} />);
    });

    afterEach(() => {
      propsWithWrongPost.getPostComments.mockClear();
    });

    it("contains Loading component", () => {
      expect(shallowWrapper.find("Loading").length).toEqual(1);
    });

    it("action getPosts is NOT called", () => {
      expect(propsWithWrongPost.getPosts.mock.calls.length).toEqual(0);
    });

    it("action getPostComments is called", () => {
      expect(propsWithWrongPost.getPostComments.mock.calls.length).toEqual(1);
    });
  });
});
