import type {Meta, StoryObj} from '@storybook/react';

import Button from './Button.web';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button/Button.web',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {control: 'text', defaultValue: 'Hello World'},
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'dark'],
      defaultValue: 'dark',
    },
    size: {control: 'select', options: ['default', 'sm', 'md', 'lg']},
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {};

export const OutlinedButton: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};
