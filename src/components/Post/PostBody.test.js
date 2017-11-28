import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import PostBody from "./PostBody.jsx";
import { post } from "../../testData";

describe("PostBodyComponent", () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<PostBody post={post} />);
  });

  it("loads correctly", () => {
    expect(shallowWrapper.find(".PostBody").length).toEqual(1);
  });

  it("contains post elements", () => {
    expect(shallowWrapper.find(".post-title").length).toEqual(1);
    expect(shallowWrapper.find(".post-author").length).toEqual(1);
    expect(shallowWrapper.find(".post-body").length).toEqual(1);
  });

  it("contains comments", () => {
    expect(shallowWrapper.find(".post-comments li").length).toEqual(5);
  });

  it("comments containe correct elements", () => {
    const singleComment = shallowWrapper.find(".post-comments li").first();
    expect(singleComment.find(".comment-title").length).toEqual(1);
    expect(singleComment.find(".comment-author").length).toEqual(1);
    expect(singleComment.find(".comment-body").length).toEqual(1);
  });
});
