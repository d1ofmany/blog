import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import Header from "./Header.jsx";

describe("HeaderComponent", () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<Header />);
  });

  it("loads correctly", () => {
    expect(shallowWrapper.find(".Header").length).toEqual(1);
  });

  it("containse correct elements", () => {
    expect(shallowWrapper.find("img").length).toEqual(1);
    expect(shallowWrapper.find("li").length).toEqual(2);
    expect(shallowWrapper.find("Link").length).toEqual(2);
  });
});
