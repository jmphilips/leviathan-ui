import React from 'react';
import * as styles from './ColorSwatchGrid.css';

type ColorSwatchProps = {
    name: string;
    value: string;
};

type ColorSwatchGridProps = {
    colors: {
        [group: string]: {
            [shade: string]: string;
        };
    };
};

const ColorSwatch = ({ name, value }: ColorSwatchProps) => (
    <div className={styles.swatch}>
        <div className={styles.preview} style={{ backgroundColor: value }} />
        <div className={styles.label}>
            <p>{name}</p>
        </div>
    </div>
);

export const ColorSwatchRow = ({
    groupName,
    colors,
}: {
    groupName: string;
    colors: Record<string, string>;
}) => (
    <div className={styles.rowWrapper}>
        <div className={styles.rowHeading}>{groupName}</div>
        <div className={styles.row}>
            {Object.entries(colors).map(([shade, value]) => (
                <ColorSwatch key={`${groupName}-${shade}`} name={`${shade}`} value={value} />
            ))}
        </div>
    </div>
);

export const ColorSwatchGrid = ({ colors }: ColorSwatchGridProps) => (
    <div className={styles.grid}>
        {Object.entries(colors).map(([groupName, shades]) => (
            <ColorSwatchRow key={groupName} groupName={groupName} colors={shades} />
        ))}
    </div>
);
