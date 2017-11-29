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
    expect(shallowWrapper.find(".PostContent-title").length).toEqual(1);
    expect(shallowWrapper.find(".PostContent-author").length).toEqual(1);
    expect(shallowWrapper.find(".PostContent-body").length).toEqual(1);
  });

  it("contains comments", () => {
    expect(shallowWrapper.find(".PostComment").length).toEqual(5);
  });

  it("comments containe correct elements", () => {
    const singleComment = shallowWrapper.find(".PostComment").first();
    expect(singleComment.find(".PostComment-title").length).toEqual(1);
    expect(singleComment.find(".PostComment-author").length).toEqual(1);
    expect(singleComment.find(".PostComment-body").length).toEqual(1);
  });
});
