import React from 'react'
import clsx from 'clsx'
import Button from '../Button'
import Link, { type LinkProps } from 'next/link'
import styles from './NavLink.module.scss'

type NavLinkPropType = {
  active: boolean
  variant: 'unstyled' | 'primary' | 'secondary' | 'underline'
  children: React.ReactNode
} & LinkProps

function NavLink({ active, variant, children, ...props }: NavLinkPropType) {
  return (
    <Button asChild className={clsx(styles.navLink, styles[variant], active ? styles.active : '')}>
      <Link {...props}>
        {children}
      </Link>
    </Button>
  )
}

export default NavLink