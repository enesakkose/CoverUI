import React from 'react'
import clsx from 'clsx'
import styles from './BrandText.module.scss'

type BrandTextPropsType = {
  className?: string,
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

function BrandText({ className, size = 'md' }: BrandTextPropsType) {
  return (
    <span className={clsx(styles.brandText, styles[size], className)}>
      Cover UI.
    </span>
  )
}

export default BrandText