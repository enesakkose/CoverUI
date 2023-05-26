import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import Link, { type LinkProps } from 'next/link'
import styles from './Button.module.scss'

export type ButtonPropsType = {
  variant?: 'unstyled' | 'primary' | 'secondary' | 'tertiary' | 'outline'
  asChild?: boolean
  size?: 'default' | 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

//type ButtonWithoutLink = ButtonHTMLAttributes<HTMLButtonElement> & ButtonPropsType
//type ButtonWithLink = LinkProps & ButtonPropsType

function Button({
  variant = 'unstyled',
  size = 'default',
  asChild = false,
  children,
  className,
  ...props
}: ButtonPropsType) {
  const Element = asChild ? Slot : 'button'
  return (
    <Element className={clsx(styles.button, styles[variant], styles[size], className)} {...props} >
      {children}
    </Element>
  )
}

export default Button
