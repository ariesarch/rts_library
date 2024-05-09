import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorschema?: "primary" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const PButton: ForwardRefExoticComponent<Omit<PButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

declare type PButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export declare const PRadio: ({ variant, size, ...props }: PRadioProps) => JSX_2.Element;

declare type PRadioProps = ComponentProps<"input"> & VariantProps<typeof radioStyles>;

declare const radioStyles: (props?: ({
    variant?: "solid" | "readonly" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export { }
