import React from "react";
import { mount } from "enzyme";
import Main from "./index";

describe("Main component", () => {
  it("should render a list of cards", () => {
    const wrapper = mount(<Main />);
    // Mock the fetch request and return some data
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        nodes: [
          { node: { title: "Card 1", ImageStyle_thumbnail: "image1.png", last_update: 1234567890 } },
          { node: { title: "Card 2", ImageStyle_thumbnail: "image2.png", last_update: 1234567890 } },
        ]
      })
    }));

    // Wait for the initial fetch to complete and re-render the component
    return new Promise((resolve) => setImmediate(resolve)).then(() => {
      wrapper.update();

      // Expect to find two cards in the list
      expect(wrapper.find("Card")).toHaveLength(2);
    });
  });

  it("should fetch new data when scrolling to the bottom of the page", () => {
    const wrapper = mount(<Main />);
    // Mock the fetch request and return some data
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        nodes: [
          { node: { title: "Card 3", ImageStyle_thumbnail: "image3.png", last_update: 1234567890 } },
        ]
      })
    }));

    // Wait for the initial fetch to complete and re-render the component
    return new Promise((resolve) => setImmediate(resolve)).then(() => {
      wrapper.update();

      // Simulate scrolling to the bottom of the page
      window.innerHeight = 500;
      window.scrollY = 1000;
      window.document.documentElement.scrollTop = 1000;
      window.dispatchEvent(new Event("scroll"));

      // Expect the fetch method to be called with page=2
      expect(global.fetch).toHaveBeenCalledWith("http://localhost:3001/api/2");

      // Wait for the new data to be fetched and the component to re-render
      return new Promise((resolve) => setImmediate(resolve)).then(() => {
        wrapper.update();

        // Expect to find three cards in the list
        expect(wrapper.find("Card")).toHaveLength(3);
      });
    });
  });
});