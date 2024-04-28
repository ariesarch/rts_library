import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Button: ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

declare type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

declare const buttonStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorschema?: "primary" | null | undefined;
} & ClassProp) | undefined) => string;

export { }
