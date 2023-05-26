import React from 'react'

type DocPagePropsType = {
  params: { slug: string[] }
}

function DocPage({ params }: DocPagePropsType) {
  console.log(params)
  return (
    <div>{params.slug}</div>
  )
}

export default DocPage