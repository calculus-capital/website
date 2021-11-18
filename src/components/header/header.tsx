import React from 'react'
import banner from '../../assets/banner2.png'

import styles from './header.module.css'

// import { Grid, Cell } from 'styled-css-grid'

type HeaderProps = {}

function Header(props:HeaderProps) {
  return (
    <header>
      <img src={banner} className={styles.banner}></img>
    </header>
  )
}

export { Header }
