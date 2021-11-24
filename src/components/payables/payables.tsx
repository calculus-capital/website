import React, { useState } from 'react'

import styles from './payables.module.css'
import discounting from '../../assets/discounting/discounting1.gif'
import bnpl from '../../assets/bnpl/bnpl1.gif'

import { Grid, Cell } from 'styled-css-grid'
import 'bulma/css/bulma.min.css';
import { Tabs, Content, Button } from 'react-bulma-components'

type PayablesProps = {}

// const

function Payables(props:PayablesProps) {
  // wow this is indeed a mess
  const [tab1Active, setTab1Active] = useState(true)
  const [tab2Active, setTab2Active] = useState(false)

  return (
    <div className={styles.container}>
      <Grid rows={10} columns={1} className={styles.grid}>
        <Cell height={2} center middle className={styles.cell}>
          <div>
            <p className={[styles.neonText, styles.headerText].join(' ')}>Payables Financing for Procurement</p>
            <p className={[styles.subText].join(' ')}>Just-In-Time Finance for procurement and other bills</p>
          </div>
        </Cell>
        <Cell height={8} className={styles.cell}>
          <Tabs className={styles.tabs}>
            <Tabs.Tab
              className={[styles.tab, tab1Active ? styles.tabIsActive : styles.none].join(' ')}
              active={tab1Active}
              onClick={() => {setTab1Active(true); setTab2Active(false)}}
            >
              <div className={tab1Active ? styles.neonTabText : styles.tabText}>Invoice Discounting</div>
            </Tabs.Tab>
            <Tabs.Tab
              className={[styles.tab, tab2Active ? styles.tabIsActive : styles.none].join(' ')}
              active={tab2Active}
              onClick={() => {setTab1Active(false); setTab2Active(true)}}
            >
              <div className={tab2Active ? styles.neonTabText : styles.tabText}>Procurement Cards & BNPL</div>
            </Tabs.Tab>
          </Tabs>
          {/* ---------------------------------------------------------------------- */}
          <Grid columns={2} rows={2} className={styles.grid} style={tab1Active ? {} : {display:"none"}} flow="column">
            <Cell width={1} height={1} className={styles.cell}>
              <div className={styles.discountingGif}>
                <img src={discounting}></img>
              </div>
            </Cell>
            <Cell width={1} height={1} className={styles.cell}>
              <Content className={[styles.discountingContent, styles.discountingSummary].join(' ')}>
                <h3>The Discounting Process</h3>
                <ol>
                  <li>Procure inventory</li>
                  <li>Upload invoice</li>
                  <li>We pay the supplier</li>
                  <li>Repay us later</li>
                </ol>
              </Content>
            </Cell>
            <Cell width={1} height={2} className={styles.cell}>
              <Content className={styles.discountingContent}>
                <h3>Delay payments with invoice discounting</h3>
                <ul>
                  <li>Procure inventory now</li>
                  <li>Introduce flexibility in payment terms</li>
                  <li>Integrate collections with repayments</li>
                </ul>
                <h3>Get onboarded and integrate with our APIs</h3>
                <ol>
                  <li>Get onboarded with provisioned credit lines</li>
                  <li>Integrate data pipelines for underwriting</li>
                  <li>Integrate money pipelines</li>
                  <li>Start buying</li>
                </ol>
              </Content>
              <div className={styles.contactButton}>
                <a href="https://notionforms.io/forms/contact-us-13" target="_blank">Get in touch</a>
              </div>
            </Cell>
          </Grid>
          {/* ---------------------------------------------------------------------- */}
          <Grid columns={2} rows={1} className={styles.grid} style={tab2Active ? {} : {display:"none"}} flow="column">
            <Cell width={1} height={1} className={styles.cell}>
              <div className={styles.discountingGif}>
                <img src={bnpl}></img>
              </div>
            </Cell>
            <Cell width={1} height={1} className={styles.cell}>
              <Content className={[styles.discountingContent, styles.discountingSummary].join(' ')}>
                <h3>The Buying Process</h3>
                <ol>
                  <li>Procure inventory</li>
                  <li>Make payment using issued card or app</li>
                  <li>We pay the supplier</li>
                  <li>Repay us later</li>
                </ol>
              </Content>
            </Cell>
            <Cell width={1} height={2} className={styles.cell}>
              <Content className={styles.discountingContent}>
                <h3>Arm procurement teams with immediate payments</h3>
                <ul>
                  <li>Procure inventory now, pay immediately</li>
                  <li>Convenient payments - Cards and UPI based BNPL</li>
                  <li>Flexible, centralized repayments, like credit cards</li>
                </ul>
                <h3>Get onboarded</h3>
                <ol>
                  <li>Get onboarded with provisioned credit lines</li>
                  <li>Issue cards and onboard teams</li>
                  <li>Integrate data pipelines for underwriting</li>
                  <li>Integrate money pipelines</li>
                  <li>Start buying</li>
                </ol>
              </Content>
              <div className={styles.contactButton}>
                <a href="https://notionforms.io/forms/contact-us-13" target="_blank">Get in touch</a>
              </div>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </div>
  )
}

export { Payables }
