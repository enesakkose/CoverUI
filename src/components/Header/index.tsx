'use client'
import React from 'react'
import BrandText from '../BrandText'
import NavLink from '../NavLink'
import Icon from '../Icon'
import Link from 'next/link'
import { HeaderTabs } from '@/utils/helpers/Tabs'
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss'

function Header() {
  const pathname = usePathname()
  
  return (
    <header className={styles.header}>
      <BrandText size='sm' />
      <nav className={styles.nav}>
        {HeaderTabs.map((tab) => (
          <NavLink 
            key={tab.title} 
            variant='primary' 
            href={tab.href} 
            active={pathname?.startsWith(tab.href)}
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>
      <Link href='https://github.com/enesakkose/cover-ui' target='_blank'>
        <Icon icon='github' size={30} />
      </Link>
    </header>
  )
}

export default Header
