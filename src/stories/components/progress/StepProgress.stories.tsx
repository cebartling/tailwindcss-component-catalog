import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StepProgress from "../../../components/progress/StepProgress";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Progress/StepProgress',
  component: StepProgress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StepProgress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StepProgress> = (args) => <StepProgress {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  step: 10
};

