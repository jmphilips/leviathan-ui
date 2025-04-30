import React from 'react';

import { headingOne } from './HeadingOne.css';

export type HeadingOneProps = {
    children: React.ReactNode;
    className?: string;
};

export const HeadingOne: React.FC<HeadingOneProps> = ({ children, className }) => (
    <h1 className={`${headingOne} ${className ?? ''}`}>{children}</h1>
);
