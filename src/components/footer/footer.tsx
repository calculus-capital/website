import React from "react";
import { Grid, Cell } from "styled-css-grid";
import styles from "./footer.module.css";

function FooterLinks() {
  return (
    <Grid columns={3} flow="row" className={styles.footerContainer}>
      <Cell>
        <a className={styles.footerlink} href="/episodes" target="_blank">
          Home
        </a>
      </Cell>
      <Cell>
        <a className={styles.footerlink} href="/contact" target="_blank">
          Episodes
        </a>
      </Cell>
      <Cell>
        <a className={styles.footerlink} href="/contact" target="_blank">
          Team
        </a>
      </Cell>
    </Grid>
  );
}

function Footer() {
  return (
    <div className={styles.footer}>
      <FooterLinks />
    </div>
  );
}

export { Footer };
