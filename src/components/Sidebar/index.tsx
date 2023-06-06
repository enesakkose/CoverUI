"use client"
import React from 'react'
import NavLink from '../NavLink'
import { SidebarTabs } from '@/utils/helpers/Tabs'
import { usePathname } from "next/navigation"
import styles from './Sidebar.module.scss'

function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      {SidebarTabs.map((tabs) => (
        <ul key={tabs.title} className={styles.tabList}>
          <h4 className={styles.title}>{tabs.title}</h4>
          {tabs.tabs.map((tab) => (
            <li key={tab.title} className={styles.tab}>
              <NavLink variant='underline' href={tab.href} active={pathname === tab.href}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      ))}
    </aside>
  )
}

export default Sidebar
