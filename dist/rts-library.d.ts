import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorschema?: "primary" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const PButton: ForwardRefExoticComponent<Omit<PButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

declare type PButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export declare const PRadio: ForwardRefExoticComponent<Omit<PRadioProps, "ref"> & RefAttributes<HTMLInputElement>>;

declare type PRadioProps = ComponentProps<"input"> & VariantProps<typeof radioStyles>;

declare const radioStyles: (props?: ({
    variant?: "solid" | "readonly" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export { }
