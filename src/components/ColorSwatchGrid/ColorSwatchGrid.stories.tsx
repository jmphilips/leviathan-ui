import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatchGrid } from './ColorSwatchGrid';
import { colorVars } from '@tokens';

const meta: Meta<typeof ColorSwatchGrid> = {
  title: 'Foundations/Colors',
  component: ColorSwatchGrid,
};

export default meta;

type Story = StoryObj<typeof ColorSwatchGrid>;

function flattenPalette(palette: typeof colorVars.palette) {
  const flat: Record<string, string> = {};
  for (const [base, shades] of Object.entries(palette)) {
    for (const [step, hex] of Object.entries(shades)) {
      flat[`${base}-${step}`] = hex;
    }
  }
  return flat;
}

export const AllColorShades: Story = {
  args: {
    colors: flattenPalette(colorVars.palette),
  },
};
