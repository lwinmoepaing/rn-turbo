import type {Meta, StoryObj} from '@storybook/react';

import DashboardWaitImage from './DashboardWaitImage.web';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DashboardWaitImage> = {
  title: 'Molecules/Images/DashboardWaitImage/DashboardWaitImage.web',
  component: DashboardWaitImage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {control: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'sm'},
  },
};

export default meta;

type Story = StoryObj<typeof DashboardWaitImage>;

export const DashboardWaitImageSize: Story = {
  args: {
    size: 'sm',
  },
};
