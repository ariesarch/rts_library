import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";


const buttonStyles = cva([
    "text-blue-500"
],
    {
        variants: {
            variant: {
                solid: "",
                outline: "border-2",
                ghost: "transaction-color duration-300"
            },
            size: {
                sm: "px-4 py-2 text-sm",
                md: "px-4 py-2 text-base",
                lg: "px-6 py-3 text-lg"
            },
            colorschema: {
                primary: "text-white"
            }
        },
        compoundVariants: [
            {
                variant: "solid",
                colorschema: "primary",
                className: "bg-primary-500 hover:bg-primary-600"
            },
            {
                variant: "outline",
                colorschema: "primary",
                className: "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100"
            },
            {
                variant: "ghost",
                colorschema: "primary",
                className: "text-primary-600 bg-transparent hover:bg-primary-100"
            }
        ],
        defaultVariants: {
            variant: "solid",
            size: "md",
            colorschema: "primary"
        }
    });
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>

// export const Button = ({ variant, size, colorschema, className, ...props }: ButtonProps) => {
//     return <button className={cn(buttonStyles({ variant, size, colorschema, className }))} {...props} />;
// }
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, size, colorschema, className, ...props }, ref) => {
    return <button ref={ref} className={cn(buttonStyles({ variant, size, colorschema, className }))} {...props} />;
});