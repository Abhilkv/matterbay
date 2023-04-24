import React from "react";
import { shallow } from "enzyme";
import { Header } from "./index";

describe("Header Component", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders the title correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".title").text()).toEqual("MatterBay");
  });
});