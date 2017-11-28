import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import Posts from "./Posts.jsx";
import { posts } from "../../testData";

describe("PostsComponent", () => {
  let shallowWrapper;

  describe("before posts are fetched", () => {
    let props = {
      posts: [],
      getPosts: jest.fn()
    };

    beforeEach(() => {
      shallowWrapper = shallow(<Posts {...props} />);
    });

    it("loads correctly", () => {
      expect(shallowWrapper.find(".Posts").length).toEqual(1);
    });

    it("displays 'No posts' message", () => {
      expect(shallowWrapper.text()).toEqual("No posts");
    });
  });

  describe("when posts are fetched", () => {
    let props = {
      posts,
      getPosts: jest.fn()
    };

    const handleChangeSpy = jest.spyOn(Posts.prototype, "handleChange");

    beforeEach(() => {
      shallowWrapper = shallow(<Posts {...props} />);
    });

    afterEach(() => {
      props.getPosts.mockClear();
    });

    it("contains PostItem components", () => {
      expect(shallowWrapper.find("input").length).toEqual(1);
      expect(shallowWrapper.find("PostItem").length).toEqual(2);
    });

    it("action getPosts is called", () => {
      expect(props.getPosts.mock.calls.length).toEqual(1);
    });

    it("it triggers handleChange on input field value change", () => {
      shallowWrapper
        .find("input")
        .simulate("change", { target: { value: "john" } });
      expect(handleChangeSpy).toHaveBeenCalled();
    });

    it("it changes state on input field value change", () => {
      shallowWrapper
        .find("input")
        .simulate("change", { target: { value: "john" } });
      expect(shallowWrapper.state("search")).toEqual("john");
    });

    it("display filtered posts on author search", () => {
      shallowWrapper.setState({ search: "john" });
      expect(shallowWrapper.find("PostItem").length).toEqual(0);
      shallowWrapper.setState({ search: "mike" });
      expect(shallowWrapper.find("PostItem").length).toEqual(1);
      shallowWrapper.setState({ search: "" });
      expect(shallowWrapper.find("PostItem").length).toEqual(2);
    });
  });
});
