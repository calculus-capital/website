import React from 'react'
import { Cell, Grid } from 'styled-css-grid'
import logo from '../../assets/logo.png'
import halo from '../../assets/halo1.png'

import styles from './intro.module.css'

type IntroProps = {}

function Intro(props:IntroProps) {
  return (
    <div className={styles.intro}>
      <Grid columns={12} flow="row" className={styles.grid}>
        <Cell width={1} className={styles.cell}></Cell>
        <Cell width={2} center middle className={styles.cell}>
          <div className={styles.logo}>
            <img src={logo}></img>
          </div>
        </Cell>
        <Cell width={3} className={styles.cell}>
          <Grid columns={1} rows={4} flow="column" className={styles.grid}>
            <Cell height={1} width={1} className={styles.cell}></Cell>
            <Cell height={3} width={1} start className={styles.cell}>
              <div className={styles.calculus}>
                <p className={styles.neonText}>Calculus Capital</p>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.calculusAbout}>
                <p>Cash Flow Financing System<br></br>
                For Startups
                </p>
              </div>
            </Cell>
          </Grid>
        </Cell>
        <Cell width={5} center className={styles.cell} style={{margin:"auto"}}>
          <div className={styles.halo}>
            <img src={halo}></img>
          </div>
        </Cell>
        <Cell width={1} className={styles.cell}></Cell>
      </Grid>
      <div className={styles.introFooter}>
        <Grid columns={12} className={styles.grid} flow="column">
          <Cell width={2} className={styles.cell}></Cell>
          <Cell width={4} className={styles.cell}></Cell>
          <Cell width={6} className={styles.cell}></Cell>
        </Grid>
      </div>
    </div>
  )
}

export { Intro }
