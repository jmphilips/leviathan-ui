import { createGlobalTheme } from '@vanilla-extract/css';

export const typography = createGlobalTheme(':root', {
    fontFamily: {
        sans: '"Inter", sans-serif',
        serif: '"DM Serif Display", serif',
    },
});
