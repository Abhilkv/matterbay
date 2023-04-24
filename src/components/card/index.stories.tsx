import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card } from "./index";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: Story = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Test title",
    ImageStyle_thumbnail: "https://www.pinkvilla.com/english/images/2023/03/1119888033_tejasswi-prakash_1280*720.jpg",
    last_update: 1620660032,
  },
};