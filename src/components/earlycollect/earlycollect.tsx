import React from "react";
import { Cell, Grid } from "styled-css-grid";
import { useMediaQuery } from "react-responsive";

import usecase1 from "../../assets/po-financing-usecase1.png";
// import usecase2 from "../../assets/early-collect-usecase2.png";

import styles from "./earlycollect.module.css";
import { Content } from "react-bulma-components";

interface Props {}

export const Earlycollect = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.subheader}>Set up an</p>
      <p className={styles.header}>Early collect Programme</p>
      <p className={styles.subheader}>for your distributors</p>
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
                <p>Onboard your distributors with their KYC, GST, financial, trade data (invoices) and other data on the calculus platform.</p>
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
                <h1>Credit Lines</h1>
                <p>We provide credit lines to your distributors.</p>
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
                <h1>Drive collections with discounts</h1>
                <p>Help distributors make early payments to you by providing them early payment discounts.</p>
              </Content>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
      <div className={styles.button}>
        <a href="https://console.calculus.capital" target="_blank">Sign Up</a>
      </div>
      <p className={styles.header}>Usecase</p>
      <img src={usecase1}></img>
    </div>
  );
};
