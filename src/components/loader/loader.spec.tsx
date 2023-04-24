import React from "react";
import { shallow } from "enzyme";
import { Loader } from "./loader";

describe("Loader component", () => {
  it("renders loader animation", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find(".loader")).toHaveLength(1);
  });
});