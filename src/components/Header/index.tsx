import React from 'react'
import BrandText from '../BrandText'
import Icon from '../Icon'
import Link from 'next/link'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <BrandText size='sm' />
      <Link href='https://github.com/enesakkose/cover-ui' target='_blank'>
        <Icon icon='github' size={30} />
      </Link>
    </header>
  )
}

export default Header
