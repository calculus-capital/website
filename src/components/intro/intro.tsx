import React from "react";
import { Cell, Grid } from "styled-css-grid";
import logo from "../../assets/logo.png";
import halo from "../../assets/halo1.png";
import systemImg from "../../assets/system.gif";

import styles from "./intro.module.css";
import { Content } from "react-bulma-components";

type IntroProps = {};

function Intro(props: IntroProps) {
  return (
    <div className={styles.intro}>
      <Grid columns={12} flow="row" className={styles.grid}>
        <Cell width={1} center middle className={styles.cell}></Cell>
        <Cell width={1} center middle className={styles.cell}>
          <div className={styles.logo}>
            <img src={logo}></img>
          </div>
        </Cell>
        <Cell width={4} center middle className={styles.cell}>
          <div className={styles.calculus}>
            <p className={styles.neonText}>Calculus Capital</p>
          </div>
          <div className={styles.separator350}></div>
          <div className={styles.calculusAbout}>
            <p>
              Cash Flow Financing System<br></br>
              For Startups
            </p>
          </div>
        </Cell>
        <Cell width={4} className={styles.cell}></Cell>
        <Cell width={2} className={styles.cell}></Cell>
      </Grid>
      <div className={styles.introFooter}>
        <Grid columns={12} rows={1} className={[styles.grid, styles.introFooterGrid].join(' ')}>
          <Cell width={2} center middle className={styles.cell}></Cell>
          <Cell width={2} center middle className={styles.cell}>
          <Content className={styles.content}>
              <h2>Receivables</h2>
              <ul>
                <li>Invoice Discounting</li>
                <li>Revenue Financing</li>
              </ul>
            </Content>
          </Cell>
          <Cell width={4} center middle className={styles.cell}>
            <div className={styles.system}>
              <img src={systemImg}></img>
              <Content className={styles.content}>
                <h2>Central console</h2>
              </Content>
            </div>
          </Cell>
          <Cell width={2} center middle className={styles.cell}>
          <Content className={styles.content}>
              <h2>Payables</h2>
              <ul>
                <li>Invoice Discounting</li>
                <li>Credit cards & BNPL</li>
              </ul>
            </Content>
          </Cell>
          <Cell width={2} center middle className={styles.cell}></Cell>
        </Grid>
      </div>
    </div>
  );
}

export { Intro };
