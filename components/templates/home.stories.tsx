import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HomeTemplate } from "./home";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Template/HomeTemplate",
  component: HomeTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof HomeTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomeTemplate> = () => <HomeTemplate />;

export const Primary = Template.bind({});
