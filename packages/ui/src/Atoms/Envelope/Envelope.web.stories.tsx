import type {Meta, StoryObj} from '@storybook/react';

import Envelope from './Envelope.web';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Envelope> = {
  title: 'Atoms/Icons/Envelope/Envelope.web',
  component: Envelope,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {control: 'select', options: ['default', 'sm']},
  },
};

export default meta;

type Story = StoryObj<typeof Envelope>;

export const PrimaryEnvelope: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};
