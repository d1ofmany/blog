import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import About from "./About.jsx";

describe("AboutComponent", () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<About />);
  });

  it("loads correctly", () => {
    expect(shallowWrapper.find(".About").length).toEqual(1);
  });

  it("containse correct elements", () => {
    expect(shallowWrapper.find("h2").length).toEqual(1);
    expect(shallowWrapper.find("p").length).toEqual(5);
  });
});
