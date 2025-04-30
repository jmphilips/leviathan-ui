import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatchGrid } from './ColorSwatchGrid';
import { colorVars } from '@tokens';

const meta: Meta<typeof ColorSwatchGrid> = {
  title: 'Foundations/Colors',
  component: ColorSwatchGrid,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ColorSwatchGrid>;

export const AllColors: Story = {
  args: {
    colors: colorVars.color,
  },
};
