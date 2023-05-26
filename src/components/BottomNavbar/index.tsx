import React from 'react'
import MouseFollower from '../MouseFollower'
import BrandText from '../BrandText'
import Link from 'next/link'
import styles from './BottomNavbar.module.scss'

function BottomNavbar() {
  return (
    <MouseFollower className={styles.bottomNavbar}>
      <BrandText  size='sm'/>
      <div className={styles.tabs}>
        <Link href='/docs'>
          Documentation
        </Link>
        <Link href='/docs/components'>
          Components
        </Link>
        <Link href='/docs/examples'>
          Examples
        </Link>
      </div>
    </MouseFollower>
  )
}

export default BottomNavbar