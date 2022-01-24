import React from "react";
import { Cell, Grid } from "styled-css-grid";
import { useMediaQuery } from "react-responsive";

import earlyPaymentsMore from "../../assets/early-payments-more.png";
import usecase1 from "../../assets/early-payments-usecase1.png";
import usecase2 from "../../assets/early-payments-usecase2.png";

import styles from "./earlypay.module.css";
import { Content } from "react-bulma-components";

interface Props {}

export const Earlypay = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.subheader}>Set up an</p>
      <p className={styles.header}>Early Pay Programme</p>
      <p className={styles.subheader}>for your suppliers</p>
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
                <h1>Integration</h1>
                <p>Integrate your invoice systems with the calculus platform, set up hypothecation.</p>
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
                <h1>Attach sources</h1>
                <p>Avail and attach credit lines to the system.</p>
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
                <h1>Attach distribution channels</h1>
                <p>Connect our supported distribution channels: invoice discounting, corporate cards or UPI BNPL to the credit lines.</p>
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
                <h1>Early pay</h1>
                <p>Make early payments to generated and approved invoices at office or point of sale.</p>
              </Content>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
      <div className={styles.button}>
        <a href="https://console.calculus.capital" target="_blank">Sign Up</a>
      </div>
      <p className={styles.header}>Usecase: 1</p>
      <p className={styles.subheader}>Invoice reverse discounting</p>
      <img src={usecase1}></img>
      <p className={styles.header}>Usecase: 2</p>
      <p className={styles.subheader}>Purchase financing at POS</p>
      <img src={usecase2}></img>
    </div>
  );
};
