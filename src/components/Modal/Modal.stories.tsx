import { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import Button from '../Button/Button';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Modal Title",
    close: () => { console.log("close") },
    isBig: true,
    modalKey: "modalKey",
    children: <div><p>This is my modal</p></div>,
  },
};
