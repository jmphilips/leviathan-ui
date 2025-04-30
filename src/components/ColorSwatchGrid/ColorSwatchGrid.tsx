import React from 'react';
import * as styles from './ColorSwatchGrid.css';

type ColorSwatchProps = {
  name: string;
  value: string;
};

const ColorSwatch = ({ name, value }: ColorSwatchProps) => (
  <div className={styles.swatch}>
    <div className={styles.preview} style={{ backgroundColor: value }} />
    <div className={styles.label}>
      <strong>{name}</strong>
      <code>{value}</code>
    </div>
  </div>
);

export const ColorSwatchGrid = ({ colors }: { colors: Record<string, string> }) => (
  <div className={styles.grid}>
    {Object.entries(colors).map(([name, value]) => (
      <ColorSwatch key={name} name={name} value={value} />
    ))}
  </div>
);
