import React from "react";
import { Grid, Cell } from "styled-css-grid";
import styles from "./footer.module.css";

function FooterLinks() {
  return (
    <Grid columns={3} flow="row">
      <Cell>
        <a
          className={styles.footerlink}
          href="https://calculus-capital.notion.site/"
          target="_blank"
        >
          Console
        </a>
      </Cell>
      <Cell>
        <a
          className={styles.footerlink}
          href="https://calculus-capital.notion.site/Case-Studies-a6f4d3e8e5214e28b2f3c6e5cba3e7ae"
          target="_blank"
        >
          Case Studies
        </a>
      </Cell>
      <a
        className={styles.footerlink}
        href="https://calculus-capital.notion.site/Usecases-6ef2163278da4990ae027bc2c5e3b1f7"
        target="_blank"
      >
        Usecases
      </a>
      <Cell>
        <a
          className={styles.footerlink}
          href="https://calculus-capital.notion.site/About-Us-33613fb172fa4d10a23ace098e756781"
          target="_blank"
        >
          Team
        </a>
      </Cell>
      <Cell>
        <a
          className={styles.footerlink}
          href="https://calculus-capital.notion.site/Terms-of-Use-7541bd817d364560b98fae61ad0bd9e2"
          target="_blank"
        >
          Terms of Use
        </a>
      </Cell>
      <Cell>
        <a
          className={styles.footerlink}
          href="https://calculus-capital.notion.site/Privacy-Policy-1f5b96beeac04123a0c02d5f581d2c63"
          target="_blank"
        >
          Privacy Policy
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
