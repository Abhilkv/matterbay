import React from "react";
import { shallow } from "enzyme";
import { Footer } from "./index";

describe("Footer component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });

  it("contains three social media icons", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(".icons a")).toHaveLength(3);
  });

  it("contains a GitHub icon with the correct link", () => {
    const wrapper = shallow(<Footer />);
    const githubLink = wrapper.find(".icons a").at(0).prop("href");
    expect(githubLink).toBe("https://github.com/Abhilkv");
  });

  it("contains a YouTube icon with the correct link", () => {
    const wrapper = shallow(<Footer />);
    const youtubeLink = wrapper.find(".icons a").at(1).prop("href");
    expect(youtubeLink).toBe("https://www.youtube.com/feed/library");
  });

  it("contains a LinkedIn icon with the correct link", () => {
    const wrapper = shallow(<Footer />);
    const linkedinLink = wrapper.find(".icons a").at(2).prop("href");
    expect(linkedinLink).toBe("https://www.linkedin.com/in/abhil-vidhyadharan-950b65197/");
  });
});