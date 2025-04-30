import { style } from '@vanilla-extract/css';
import { spacingVars, radiiVars, colorVars } from '@tokens';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
  gap: spacingVars.spacing.lg,
});

export const swatch = style({
  borderRadius: radiiVars.radius.md,
  overflow: 'hidden',
  border: `1px solid ${colorVars.palette.textMuted[300]}`,
  background: colorVars.palette.background[100],
});

export const preview = style({
  height: '80px',
  width: '100%',
});

export const label = style({
  padding: spacingVars.spacing.sm,
  fontSize: '0.875rem',
  color: colorVars.palette.text[900],
});
