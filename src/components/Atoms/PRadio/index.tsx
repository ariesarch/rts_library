import { cn } from "@/utils"
import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps, forwardRef } from "react"

const radioStyles = cva([
    "cursor-pointer",
    "accent-primary-500"
],
    {
        variants: {
            variant: {
                solid: "",
                readonly: "cursor-not-allowed",
            },
            size: {
                sm: "px-4 py-2 w-2 h-2",
                md: "px-4 py-2 w-4 h-4",
                lg: "px-6 py-3 w-8 h-8"
            }
        },
        defaultVariants: {
            variant: "solid",
            size: "md"
        }
    }
)
type PRadioProps = ComponentProps<"input"> & VariantProps<typeof radioStyles>
// export const PRadio = ({ variant, size, ...props }: PRadioProps) => {
//     return <input type="radio" {...props} className={cn(radioStyles({ variant, size }))} disabled={variant === "readonly"} />
// }
export const PRadio = forwardRef<HTMLInputElement, PRadioProps>(({ variant, size, ...props }, ref) => {
    return <input ref={ref} type="radio" {...props} className={cn(radioStyles({ variant, size }))} disabled={variant === "readonly"} />
})
// tet radio component
