import React from "react";
import { shallow } from "enzyme";
import { Card } from "./index";

describe("Card component", () => {
  const testData = {
    title: "Test Title",
    ImageStyle_thumbnail: "https://example.com/image.jpg",
    last_update: 1622498587,
  };

  it("should render the Card component", () => {
    const wrapper = shallow(<Card data={testData} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render the title in the header", () => {
    const wrapper = shallow(<Card data={testData} />);
    expect(wrapper.find(".header").text()).toEqual("Test Title");
  });

  it("should truncate the title if it is too long", () => {
    const testData = {
      title:
        "A title that is longer than 80 characters and needs to be truncated",
      ImageStyle_thumbnail: "https://example.com/image.jpg",
      last_update: 1622498587,
    };
    const wrapper = shallow(<Card data={testData} />);
    expect(wrapper.find(".header").text()).toEqual(
      "A title that is longer than 80 characters and needs to be trunc..."
    );
  });

  it("should render the image with the correct props", () => {
    const wrapper = shallow(<Card data={testData} />);
    const img = wrapper.find(".cardImage");
    expect(img.prop("src")).toEqual("https://example.com/image.jpg");
    expect(img.prop("width")).toEqual(250);
    expect(img.prop("height")).toEqual(200);
    expect(img.prop("alt")).toEqual("img");
  });

  it("should render the last update date in the correct format", () => {
    const wrapper = shallow(<Card data={testData} />);
    expect(wrapper.find(".cardText div").text()).toEqual("Jun 1, 2021, 12:43 PM IST");
  });
});