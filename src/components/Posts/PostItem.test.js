import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import PostItem from "./PostItem.jsx";
import { post } from "../../testData";

describe("PostItemComponent", () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<PostItem post={post} />);
  });

  it("loads correctly", () => {
    expect(shallowWrapper.find(".PostItem").length).toEqual(1);
  });

  it("contains post elements", () => {
    expect(shallowWrapper.find(".post-title").length).toEqual(1);
    expect(shallowWrapper.find(".post-author").length).toEqual(1);
    expect(shallowWrapper.find(".post-body").length).toEqual(1);
  });
});
