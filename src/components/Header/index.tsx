import React from 'react'
import BrandText from '../BrandText'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <BrandText variant='sm' />
    </header>
  )
}

export default Header
