import React, { useState } from 'react'

import styles from './payables.module.css'

import { Grid, Cell } from 'styled-css-grid'
import 'bulma/css/bulma.min.css';
import { Tabs } from 'react-bulma-components'

type PayablesProps = {}

// const

function Payables(props:PayablesProps) {
  // wow this is indeed a mess
  const [tab1Active, setTab1Active] = useState(true)
  const [tab2Active, setTab2Active] = useState(false)
  const [tab3Active, setTab3Active] = useState(false)

  return (
    <div className={styles.container}>
      <Grid rows={10} columns={1} className={styles.grid}>
        <Cell height={2} center middle className={styles.cell}>
          <div>
            <p className={[styles.neonText, styles.headerText].join(' ')}>Payables Financing</p>
            <p className={[styles.subText].join(' ')}>Finance for procurement and other bills</p>
          </div>
        </Cell>
        <Cell height={8} className={styles.cell}>
          <Tabs className={styles.tabs}>
            <Tabs.Tab
              className={[styles.tab, tab1Active ? styles.tabIsActive : styles.none].join(' ')}
              active={tab1Active}
              onClick={() => {setTab1Active(true); setTab2Active(false); setTab3Active(false)}}
            >
              <div className={tab1Active ? styles.neonTabText : styles.tabText}>Invoice Discounting</div>
            </Tabs.Tab>
            <Tabs.Tab
              className={[styles.tab, tab2Active ? styles.tabIsActive : styles.none].join(' ')}
              active={tab2Active}
              onClick={() => {setTab1Active(false); setTab2Active(true); setTab3Active(false)}}
            >
              <div className={tab2Active ? styles.neonTabText : styles.tabText}>Procurement Cards & BNPL</div>
            </Tabs.Tab>
          </Tabs>
        </Cell>
      </Grid>
    </div>
  )
}

export { Payables }
