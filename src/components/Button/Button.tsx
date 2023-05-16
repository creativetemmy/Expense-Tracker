import React, { Children } from 'react'
import styles from './Button.module.css'

interface Props {
  children: string
  color?: 'primary' | 'secondary' | 'danger'
  onclick: () => void
}

const Button = ({ children, onclick, color }: Props) => {
  return (
    <button
      className={[styles.btn, styles['btn-' + color]].join(' ')}
      onClick={onclick}
    >
      {children}
    </button>
  )
}

export default Button
