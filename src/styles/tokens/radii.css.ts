import { createGlobalTheme } from '@vanilla-extract/css';

export const radiiVars = createGlobalTheme(':root', {
    radius: {
        sm: '2px',
        md: '6px',
        lg: '12px',
        pill: '9999px',
        circle: '50%',
    },
});
