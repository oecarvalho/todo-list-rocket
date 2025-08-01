import { cva, cx, type VariantProps } from "class-variance-authority"
import { Text } from "./Text"
import React from "react"
import { Skeleton } from "./Skeleton"

export const badgeVariants = cva('inline-flex items-center rounded-full', {
    variants: {
        variant: {
            none: '',
            primary: 'bg-green-light',
            secondary: 'bg-pink-light'
        },
        size: {
            sm: 'py-0.5 px-2'
        }
    },
    defaultVariants:{
        variant: 'primary',
        size: 'sm'
    }
})

export const badgeTextVariants = cva('', {
    variants: {
        variant: {
            primary: 'text-green-dark',
            secondary: 'text-pink-dark'
        }
    },

    defaultVariants: {
        variant: 'primary'
    }
})

interface BadgeProps extends React.ComponentProps<'div'>, VariantProps<typeof badgeVariants>{
    loading?: boolean;
}

export const badgeSkeletonVariants = cva(``, {
    variants: {
        size: {
            sm: 'w-6 h-6'
        }
    },
    defaultVariants: {
        size: 'sm'
    }
})

export function Badge({variant, size, className, children, loading, ...props}: BadgeProps){
    if(loading){
        return (
            <Skeleton 
                rounded='full' 
                className={cx(
                    badgeVariants({variant: 'none'}), 
                    badgeSkeletonVariants({size}),
                    className
                )} 
            />
        )
    }
    return(
        <div className={badgeVariants({variant, size, className})} {...props}>
            <Text variant={"body-sm-bold"} className={badgeTextVariants({variant})}>
                {children}
            </Text>
        </div>
    )
}