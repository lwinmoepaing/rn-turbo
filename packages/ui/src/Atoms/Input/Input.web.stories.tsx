import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input.web';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
  title: 'Atoms/Form/Input/Input.web',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    placeholder: {control: 'text', defaultValue: 'Test placeholder'},
    variant: {control: 'select', options: ['default', 'outlined']},
    size: {control: 'select', options: ['default', 'sm']},
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const PrimaryInput: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};
