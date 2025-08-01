import  React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const containerVariants = cva('mx-auto', {
    variants: {
        size:{
            md: 'max-w-[31.5rem] px-2'
        }
    },
    defaultVariants: {
        size: 'md'
    }
})


interface ContainerProprs extends VariantProps<typeof containerVariants>, React.ComponentProps<'div'>{
    as?: keyof React.JSX.IntrinsicElements;
}

export function Container({as='div', children, className, ...props}: ContainerProprs){
    return React.createElement(
        as, {className: containerVariants({size: 'md', className}),
        ...props
        },
        children
    )
}