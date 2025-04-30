import { style } from '@vanilla-extract/css';
import { typography } from '../../../styles/tokens/typography.css';

export const headingOne = style({
    fontFamily: typography.fontFamily.serif,
    fontSize: '2.5rem',
    lineHeight: '1.2',
    fontWeight: 700,
    margin: '0.5em 0',
});
