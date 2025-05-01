type ColorSwatchGridProps = {
    colors: {
        [group: string]: {
            [shade: string]: string;
        };
    };
};
export declare const ColorSwatchRow: ({ groupName, colors, }: {
    groupName: string;
    colors: Record<string, string>;
}) => import("react/jsx-runtime").JSX.Element;
export declare const ColorSwatchGrid: ({ colors }: ColorSwatchGridProps) => import("react/jsx-runtime").JSX.Element;
export {};
