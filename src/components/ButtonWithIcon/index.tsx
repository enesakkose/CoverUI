import React from 'react'
import Button from '../Button'
import {type ButtonPropsType } from '../Button'
import styles from './ButtonWithIcon.module.scss'

function ButtonWithIcon({ children, ...props}: ButtonPropsType) {
  return (
    <Button {...props} className={styles.buttonWithIcon}>
      {children}
    </Button>
  )
}

export default ButtonWithIcon