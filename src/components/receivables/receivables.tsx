import React, { useState } from 'react'

import styles from './receivables.module.css'
import discounting from '../../assets/discounting/discounting1.gif'
import bnpl from '../../assets/bnpl/bnpl1.gif'

import { Grid, Cell } from 'styled-css-grid'
import 'bulma/css/bulma.min.css';
import { Tabs, Content } from 'react-bulma-components'

type ReceivablesProps = {}

// const

function Receivables(props:ReceivablesProps) {
  // wow this is indeed a mess
  const [tab1Active, setTab1Active] = useState(true)
  const [tab2Active, setTab2Active] = useState(false)

  return (
    <div className={styles.container}>
      <Grid rows={10} columns={1} className={styles.grid}>
        <Cell height={2} center middle className={styles.cell}>
          <div>
            <p className={[styles.neonText, styles.headerText].join(' ')}>Receivables Financing</p>
            <p className={[styles.subText].join(' ')}>Get paid earlier and on your terms</p>
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
              <div className={tab2Active ? styles.neonTabText : styles.tabText}>Short Term Revenue Financing</div>
            </Tabs.Tab>
          </Tabs>
          {/* ---------------------------------------------------------------------- */}
          <Grid columns={2} rows={2} className={styles.grid} style={tab1Active ? {} : {display:"none"}}>
            <Cell width={1} height={2} className={styles.cell}>
              <Content className={styles.discountingContent}>
                <h3>Delay payments with invoice discounting</h3>
                <ul>
                  <li><h4>Get paid for sold inventory now</h4></li>
                  <li><h4>Introduce flexibility in payment terms</h4></li>
                  <li><h4>Streamline collections</h4></li>
                  <li><h4>Help your supply chain grow</h4></li>
                </ul>
                <h3>Get onboarded and integrate with our APIs</h3>
                <ol>
                  <li>Get onboarded with provisioned credit lines</li>
                  <li>Integrate data pipelines for underwriting</li>
                  <li>Integrate money pipelines</li>
                  <li>Start discounting</li>
                </ol>
              </Content>
            </Cell>
            <Cell width={1} height={1} className={styles.cell}>
              <div className={styles.discountingGif}>
                <img src={discounting}></img>
              </div>
            </Cell>
            <Cell width={1} height={1} className={styles.cell}>
              <Content className={[styles.discountingContent, styles.discountingSummary].join(' ')}>
                  <h3>The Discounting Process</h3>
                  <ol>
                    <li>Sell inventory</li>
                    <li>Upload invoice</li>
                    <li>We pay you</li>
                    <li>We collect from your buyer</li>
                  </ol>
                </Content>
            </Cell>
          </Grid>
          {/* ---------------------------------------------------------------------- */}
          <Grid columns={2} className={styles.grid} style={tab2Active ? {} : {display:"none"}}>
            <Cell width={1} className={styles.cell}>
              <Content className={styles.discountingContent}>
                <h3>Arm procurement teams with immediate payments</h3>
                <ul>
                  <li><h4>Get paid for incoming revenue</h4></li>
                  <li><h4>Customized to fit your needs</h4></li>
                  <li><h4>Manage cash flows better</h4></li>
                </ul>
                <h3>Get onboarded</h3>
                <ol>
                  <li>Get onboarded with provisioned credit lines</li>
                  <li>Issue cards and onboard teams</li>
                  <li>Integrate data pipelines for underwriting</li>
                  <li>Integrate money pipelines</li>
                  <li>Get paid</li>
                </ol>
              </Content>
            </Cell>
            <Cell width={1} className={styles.cell}>
              <div className={styles.discountingGif}>
                <img src={bnpl}></img>
              </div>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </div>
  )
}

export { Receivables }
