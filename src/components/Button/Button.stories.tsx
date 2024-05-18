import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Review: Story = {
  args: {
    children: "Test",
    theme: "pcr",
  },
};

export const Plan: Story = {
  args: {
    children: "Test",
    theme: "pcp",
  },
};

export const Degree: Story = {
  args: {
    children: "Test",
    theme: "pdp",
  },
};

export const Alert: Story = {
  args: {
    children: "Test",
    theme: "pca",
  },
};
