import React from 'react'
import styles from './PageHeader.module.css'

interface Props {}

export const PageHeader = (props: Props) => (
  <div className={styles.container}>
    <h1 className={styles.neonText}>Liran Meir's Blog</h1>
  </div>
)
