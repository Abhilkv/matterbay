import React from "react";
import { shallow } from "enzyme";
import { Footer } from "./index";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders three social media icons", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(".icons a")).toHaveLength(3);
  });

  it("renders the Github icon", () => {
    const wrapper = shallow(<Footer />);
    const githubLink = wrapper.find(".icons a").at(0).prop("href");
    expect(githubLink).toBe("https://github.com/Abhilkv");
    expect(wrapper.find(".icons a img").at(0).prop("alt")).toBe("github");
  });

  it("renders the YouTube icon", () => {
    const wrapper = shallow(<Footer />);
    const youtubeLink = wrapper.find(".icons a").at(1).prop("href");
    expect(youtubeLink).toBe("https://www.youtube.com/feed/library");
    expect(wrapper.find(".icons a img").at(1).prop("alt")).toBe("youtube");
  });

  it("renders the LinkedIn icon", () => {
    const wrapper = shallow(<Footer />);
    const linkedinLink = wrapper.find(".icons a").at(2).prop("href");
    expect(linkedinLink).toBe("https://www.linkedin.com/in/abhil-vidhyadharan-950b65197/");
    expect(wrapper.find(".icons a img").at(2).prop("alt")).toBe("linkedin");
  });
});