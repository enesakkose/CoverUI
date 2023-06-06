import React from 'react'
import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import styles from './page.module.scss'

type DocPagePropsType = {
  params: { slug: string[] }
}

async function getDocWithParams({ params }: DocPagePropsType) {
  const slug = params.slug?.join('/') || ''
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === slug)
  if(!doc) return null
  return doc
}

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc._raw.flattenedPath.split('/'),
  }))
}

async function SlugPage({ params }: DocPagePropsType) {
  const doc = await getDocWithParams({ params })
  if(!doc) return notFound()
  return (
    <main className={styles.slugPage}>
      <div className={styles.content}>
        <h2>{doc.title}</h2>
        <p className={styles.description}>{doc.description}</p>
      </div>
    </main>
  )
}

export default SlugPage
