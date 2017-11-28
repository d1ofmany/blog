import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import App from "./App";

describe("AppComponent", () => {
  let shallowWrapper,
    store = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: jest.fn()
    };

  beforeEach(() => {
    shallowWrapper = shallow(<App store={store} />);
  });

  it("loads correctly", () => {
    expect(shallowWrapper.find(".App").length).toEqual(1);
  });
});
