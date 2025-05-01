import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatchGrid } from './ColorSwatchGrid';
import { colorVars } from '@tokens';

const meta: Meta<typeof ColorSwatchGrid> = {
    title: 'Foundations/Colors',
    component: ColorSwatchGrid,
};

export default meta;

type Story = StoryObj<typeof ColorSwatchGrid>;

export const AllColorShades: Story = {
    args: {
        colors: colorVars.palette,
    },
};
