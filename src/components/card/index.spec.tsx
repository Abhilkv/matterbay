import { shallow } from "enzyme";
import { Card } from "./index";
import { formatDate } from "./index";

describe("Card", () => {
  it("renders correctly with given props", () => {
    const data = {
      title: "Test title",
      ImageStyle_thumbnail: "https://testimage.com",
      last_update: 1620660032,
    };
    const wrapper = shallow(<Card data={data} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("formatDate", () => {
  it("formats the date correctly", () => {
    const timestamp = 1620660032;
    const expectedDate = "May 9, 2021, 4:40 PM GMT+5:30";
    expect(formatDate(timestamp)).toEqual(expectedDate);
  });
});

describe("Card with title", () => {
  it("slices the title correctly if it is longer than 66 characters", () => {
    const data = {
      title: "This is a long test title that should be sliced",
      ImageStyle_thumbnail: "https://testimage.com",
      last_update: 1620660032,
    };
    const wrapper = shallow(<Card data={data} />);
    expect(wrapper.find(".header").text()).toEqual("This is a long test title that should be sliced...");
  });

  it("sets the alt attribute of the image tag correctly", () => {
    const data = {
      title: "Test title",
      ImageStyle_thumbnail: "https://testimage.com",
      last_update: 1620660032,
    };
    const wrapper = shallow(<Card data={data} />);
    expect(wrapper.find("img").prop("alt")).toEqual("img");
  });
});