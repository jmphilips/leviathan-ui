import type { Meta, StoryObj } from '@storybook/react';
import { HeadingOne } from './HeadingOne';

const meta: Meta<typeof HeadingOne> = {
    title: 'Typography/HeadingOne',
    component: HeadingOne,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: 'Optional CSS class for styling',
        },
        children: {
            control: 'text',
            description: 'Text content inside the heading',
        },
    },
};

export default meta;

type Story = StoryObj<typeof HeadingOne>;

export const Default: Story = {
    args: {
        children: 'Leviathan UI',
        className: 'text-3xl font-bold',
    },
};
