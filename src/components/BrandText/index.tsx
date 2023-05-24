import React from 'react'
import clsx from 'clsx'
import styles from './BrandText.module.scss'

type BrandTextPropsType = {
  className?: string,
  variant?: 'sm' | 'md' | 'lg' | 'xl'
}

function BrandText({ className, variant = 'md' }: BrandTextPropsType) {
  return (
    <span className={clsx(styles.brandText, styles[variant], className)}>
      Cover UI.
    </span>
  )
}

export default BrandText