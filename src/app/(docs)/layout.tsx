import React from 'react'
import Sidebar from '@/components/Sidebar'
import styles from './layout.module.scss'

function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.docsLayout}>
      {children}
      <Sidebar />
    </section>
  )
}

export default DocsLayout
