import React, { useState } from "react";

import styles from "./receivables.module.css";
import discounting from "../../assets/revdisc/revdisc1.gif";
import revenue from "../../assets/revenue/revenue1.gif";

import { Grid, Cell } from "styled-css-grid";
import "bulma/css/bulma.min.css";
import { Tabs, Content, Button } from "react-bulma-components";

type ReceivablesProps = {};

// const

function Receivables(props: ReceivablesProps) {
  // wow this is indeed a mess
  const [tab1Active, setTab1Active] = useState(true);
  const [tab2Active, setTab2Active] = useState(false);

  return (
    <div className={styles.container}>
      <Grid rows={10} columns={1} className={styles.grid}>
        <Cell height={2} center middle className={styles.cell}>
          <div>
            <p className={[styles.neonText, styles.headerText].join(" ")}>
              Receivables Financing for Sales
            </p>
            <p className={[styles.subText].join(" ")}>
              Get paid earlier and on your terms
            </p>
          </div>
        </Cell>
        <Cell height={8} className={styles.cell}>
          <Tabs className={styles.tabs}>
            <Tabs.Tab
              className={[
                styles.tab,
                tab1Active ? styles.tabIsActive : styles.none,
              ].join(" ")}
              active={tab1Active}
              onClick={() => {
                setTab1Active(true);
                setTab2Active(false);
              }}
            >
              <div className={tab1Active ? styles.neonTabText : styles.tabText}>
                Invoice Discounting
              </div>
            </Tabs.Tab>
            <Tabs.Tab
              className={[
                styles.tab,
                tab2Active ? styles.tabIsActive : styles.none,
              ].join(" ")}
              active={tab2Active}
              onClick={() => {
                setTab1Active(false);
                setTab2Active(true);
              }}
            >
              <div className={tab2Active ? styles.neonTabText : styles.tabText}>
                Other Accounts Receivables
              </div>
            </Tabs.Tab>
          </Tabs>
          {/* ---------------------------------------------------------------------- */}
          <Grid
            columns={2}
            rows={2}
            className={styles.grid}
            style={tab1Active ? {} : { display: "none" }}
          >
            <Cell width={1} height={2} className={styles.cell}>
              <Content className={styles.discountingContent}>
                <h3>Get paid now with invoice discounting</h3>
                <ul>
                  <li>Get paid for sold inventory now</li>
                  <li>Introduce flexibility in payment terms</li>
                  <li>Streamline collections</li>
                  <li>Help your supply chain grow</li>
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
            {/* <Cell width={1} height={1} className={styles.cell}>
              <div className={styles.discountingGif}>
                <img src={discounting}></img>
              </div>
            </Cell> */}
            <Cell width={1} height={2} className={styles.cell}>
              <Content
                className={[
                  styles.discountingContent,
                  styles.discountingSummary,
                ].join(" ")}
              >
                <h3>The Discounting Process</h3>
                <ol>
                  <li>Sell inventory</li>
                  <li>Upload invoice</li>
                  <li>We pay you</li>
                  <li>We collect from your buyer</li>
                </ol>
              </Content>
              <div className={styles.contactButton}>
                <a
                  href="https://notionforms.io/forms/contact-us-13"
                  target="_blank"
                >
                  Get in touch
                </a>
              </div>
            </Cell>
          </Grid>
          {/* ---------------------------------------------------------------------- */}
          <Grid
            columns={2}
            className={styles.grid}
            style={tab2Active ? {} : { display: "none" }}
          >
            <Cell width={1} className={styles.cell}>
              <Content className={styles.discountingContent}>
                <h3>Get paid now for other accounts receivables</h3>
                <ul>
                  <li>Get paid for incoming revenue</li>
                  <li>Customized to fit your needs</li>
                  <li>Manage cash flows better</li>
                </ul>
                <h3>Get onboarded</h3>
                <ol>
                  <li>Get onboarded with provisioned credit lines</li>
                  <li>Integrate data and money pipelines</li>
                  <li>Get paid</li>
                </ol>
              </Content>
            </Cell>
            {/* <Cell width={1} className={styles.cell}>
              <div className={styles.discountingGif}>
                <img src={revenue}></img>
              </div>
            </Cell> */}
          </Grid>
        </Cell>
      </Grid>
    </div>
  );
}

export { Receivables };
