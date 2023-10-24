import type { Meta, StoryObj } from '@storybook/react';
import  Step1  from './Step1';

const meta = {
  title: 'Step1',
  component: Step1,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Step1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
