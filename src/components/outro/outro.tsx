import React from 'react'
import { Cell, Grid } from 'styled-css-grid'
import logo from '../../assets/logo.png'
import halo from '../../assets/eye.png'

import 'bulma/css/bulma.min.css';
import styles from './outro.module.css'

type OutroProps = {}

function Outro(props:OutroProps) {
  return (
    <div className={styles.outro}>
      <Grid columns={12} flow="row" className={styles.grid}>
        <Cell width={1} className={styles.cell}></Cell>
        <Cell width={5} center className={styles.cell} style={{margin:"auto"}}>
          <div className={styles.halo}>
            <img src={halo}></img>
          </div>
        </Cell>
        <Cell width={5} center middle className={styles.cell}>
          <div className={styles.calculus}>
            <p className={styles.neonText}>All-Seeing Eye</p>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.calculusAbout}>
            <ul>
              <li>Centrally view and control distributed activity</li>
              <li>Analytics and cash flow management console</li>
              <li>Track every transaction on the blockchain</li>
              <li>Secure and fraud resilient auditing</li>
            </ul>
          </div>
        </Cell>
        <Cell width={1} className={styles.cell}></Cell>
      </Grid>
      <div className={styles.outroFooter}>
        <Grid columns={12} className={styles.grid} flow="column">
          <Cell width={2} className={styles.cell}></Cell>
          <Cell width={4} className={styles.cell}></Cell>
          <Cell width={6} className={styles.cell}></Cell>
        </Grid>
      </div>
    </div>
  )
}

export { Outro }
