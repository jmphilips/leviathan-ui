import { style } from '@vanilla-extract/css';
import { spacingVars, colorVars, typography } from '@tokens';

export const grid = style({
    display: 'grid',
    gap: spacingVars.spacing.lg,
});

export const rowWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    gap: spacingVars.spacing.sm,
});

export const rowHeading = style({
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: typography.fontFamily.sans,
    color: colorVars.palette.text[900],
    marginBottom: spacingVars.spacing.xs,
    textTransform: 'capitalize',
});

export const row = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
});

export const swatch = style({
    overflow: 'hidden',
    background: colorVars.palette.background[100],
});

export const preview = style({
    height: '80px',
    width: '72px',
});

export const label = style({
    padding: spacingVars.spacing.sm,
    fontSize: '0.75rem',
    color: colorVars.palette.text[900],
    fontFamily: typography.fontFamily.sans,
    textAlign: 'center',
});
