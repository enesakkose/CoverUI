import React, { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './MainContainer.module.scss'

type MainContainerPropsType = {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

function MainContainer({ children, className, as: Element = 'div' }: MainContainerPropsType) {
  return <Element className={clsx(styles.mainContainer, className)}>{children}</Element>
}

export default MainContainer
