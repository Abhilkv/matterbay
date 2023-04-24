import React from "react";
import { Story, Meta } from "@storybook/react";
import { Card } from "./index";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: Story<any> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Example Card Title",
    ImageStyle_thumbnail:
      "https://via.placeholder.com/250x200.png?text=Placeholder+Image",
    last_update: Date.now(),
  },
};