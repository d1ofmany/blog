import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import Loading from "./Loading.jsx";

describe("LoadingComponent", () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<Loading />);
  });

  it("loads correctly", () => {
    expect(shallowWrapper.find(".Loading").length).toEqual(1);
  });

  it("containse correct elements", () => {
    expect(shallowWrapper.find("h3").length).toEqual(1);
  });
});
