import { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';

const meta = {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "This is a tooltip",
  },
};
