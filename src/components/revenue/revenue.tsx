import React from "react";
import { Cell, Grid } from "styled-css-grid";
import { useMediaQuery } from "react-responsive";

import revenuementsMore from "../../assets/early-payments-more.png";
import usecase1 from "../../assets/early-payments-usecase1.png";
import usecase2 from "../../assets/early-payments-usecase2.png";

import styles from "./revenue.module.css";
import { Content } from "react-bulma-components";

interface Props {}

export const Revenue = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.subheader}>Set up a</p>
      <p className={styles.header}>Revenue based credit line</p>
      <p className={styles.subheader}>that grows along you</p>
      <p className={styles.subheader}>‎</p>
      <Grid columns={1}>
        <Cell>
          <Grid columns={10}>
            <Cell center middle width={2} className={styles.cell}>
              <div className={styles.circle}>
                <p>1</p>
              </div>
            </Cell>
            <Cell width={8} className={styles.cell}>
              <Content className={styles.stepcontent}>
                <h1>Onboarding</h1>
                <p>Upload your KYC, GST, financial, trade data (invoices) and other data on the calculus platform.</p>
              </Content>
            </Cell>
            {/* step 2 */}
            <Cell center middle width={2} className={styles.cell}>
              <div className={styles.circle}>
                <p>2</p>
              </div>
            </Cell>
            <Cell width={8} className={styles.cell}>
              <Content className={styles.stepcontent}>
                <h1>Provision credit</h1>
                <p>Get a credit line sanctioned with a fixed interest rate.</p>
              </Content>
            </Cell>
            {/* step 3 */}
            <Cell center middle width={2} className={styles.cell}>
              <div className={styles.circle}>
                <p>3</p>
              </div>
            </Cell>
            <Cell width={8} className={styles.cell}>
              <Content className={styles.stepcontent}>
                <h1>Connect Calculus as a pipe</h1>
                <p>Connect the calculus system with your online collections.</p>
              </Content>
            </Cell>
            {/* step 4 */}
            <Cell center middle width={2} className={styles.cell}>
              <div className={styles.circle}>
                <p>4</p>
              </div>
            </Cell>
            <Cell width={8} className={styles.cell}>
              <Content className={styles.stepcontent}>
                <h1>Request for credit</h1>
                <p>Place a request for credit, choose from among the plans offered for repayment using future revenue pledges. Get it serviced within a day.</p>
              </Content>
            </Cell>
            {/* step 5 */}
            <Cell center middle width={2} className={styles.cell}>
              <div className={styles.circle}>
                <p>5</p>
              </div>
            </Cell>
            <Cell width={8} className={styles.cell}>
              <Content className={styles.stepcontent}>
                <h1>Continuous automated repayments</h1>
                <p>We build a cash flow trap in your collections channel, and handle daily repayments with shock absorption.</p>
              </Content>
            </Cell>
            {/* step 6 */}
            <Cell center middle width={2} className={styles.cell}>
              <div className={styles.circle}>
                <p>6</p>
              </div>
            </Cell>
            <Cell width={8} className={styles.cell}>
              <Content className={styles.stepcontent}>
                <h1>Revolve</h1>
                <p>Restart the process, with adjusted sanctions and trapped cash.</p>
              </Content>
            </Cell>
            {/* step 7 */}
            <Cell center middle width={2} className={styles.cell}>
              <div className={styles.circle}>
                <p>∞</p>
              </div>
            </Cell>
            <Cell width={8} className={styles.cell}>
              <Content className={styles.stepcontent}>
                <h1>Reconciliation</h1>
                <p>We discharge any excess collateral collected with a TAT of 3 days.</p>
              </Content>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
      <div className={styles.button}>
        <a href="https://console.calculus.capital" target="_blank">Sign Up</a>
      </div>
    </div>
  );
};
