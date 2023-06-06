import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import styles from './BrandText.module.scss'

type BrandTextPropsType = {
  className?: string,
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

function BrandText({ className, size = 'md' }: BrandTextPropsType) {
  return (
    <Link href='/' className={clsx(styles.brandText, styles[size], className)}>
      Cover UI.
    </Link>
  )
}

export default BrandText