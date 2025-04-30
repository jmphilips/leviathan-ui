import { createGlobalTheme } from '@vanilla-extract/css';

export const typography = createGlobalTheme(':root', {
    fontFamily: {
        sans: `'Libre Franklin', sans-serif`,
        serif: `'IM Fell English', serif`,
    },
});
