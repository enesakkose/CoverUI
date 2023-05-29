import React from 'react'
import { SidebarTabs } from '@/utils/helpers/SidebarTabs'
import Button from '../Button'
import Link from 'next/link'
import styles from './Sidebar.module.scss'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {SidebarTabs.map((tabs) => (
        <ul key={tabs.title} className={styles.tabList}>
          <h4 className={styles.title}>{tabs.title}</h4>
          {tabs.tabs.map((tab) => (
            <li key={tab.title} className={styles.tab}>
              <Button asChild>
                <Link href={tab.href}>{tab.title}</Link>
              </Button>
            </li>
          ))}
        </ul>
      ))}
    </aside>
  )
}

export default Sidebar
