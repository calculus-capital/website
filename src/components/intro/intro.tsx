import React, { useEffect, useState } from "react";
import { Cell, Grid } from "styled-css-grid";
import logo from "../../assets/logo.png";
import halo from "../../assets/halo1.png";
import systemImg from "../../assets/system4.png";

import 'bulma/css/bulma.min.css';
import styles from "./intro.module.css";
import { Content, Menu, Section } from "react-bulma-components";

type IntroProps = {};

function Intro(props: IntroProps) {

  return (
    <div className={styles.intro}>
      <div className={styles.introHeader}>
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
                Cash Flow Financing<br></br>
                For Startups
              </p>
            </div>
          </Cell>
          <Cell width={3} className={styles.cell}></Cell>
          <Cell width={3} className={styles.cell}>
            <Section className={styles.menu}>
              <Menu>
                <Menu.List title="Demo">
                  <Menu.List.Item>
                    <a className={styles.notionLink} href="https://console.calculus.capital/" target="_blank">
                      Console
                    </a>
                  </Menu.List.Item>
                </Menu.List>
                <Menu.List title="Documentation">
                  <Menu.List.Item>
                    <a className={styles.notionLink} href="https://calculus-capital.notion.site/Case-Studies-a6f4d3e8e5214e28b2f3c6e5cba3e7ae" target="_blank">
                      Case Studies
                    </a>
                  </Menu.List.Item>
                  <Menu.List.Item>
                    <a className={styles.notionLink} href="https://calculus-capital.notion.site/Usecases-6ef2163278da4990ae027bc2c5e3b1f7" target="_blank">
                      Usecases
                    </a>
                  </Menu.List.Item>
                </Menu.List>
                <Menu.List title="About">
                  <Menu.List.Item>
                    <a className={styles.notionLink} href="https://calculus-capital.notion.site/About-Us-33613fb172fa4d10a23ace098e756781" target="_blank">
                      Team
                    </a>
                  </Menu.List.Item>
                </Menu.List>
              </Menu>
            </Section>
          </Cell>
        </Grid>
      </div>
      <div className={styles.introFooter}>
        <Grid columns={12} rows={1} className={[styles.grid, styles.introFooterGrid].join(' ')}>
          <Cell width={7} center middle className={styles.cell}>
            <div className={styles.system}>
              <Grid columns={10}>
                <Cell width={2}></Cell>
                <Cell className={styles.iframe} width={4}>
                  <iframe src={"https://console.calculus.capital/receivables"} className={styles.if1}></iframe>
                </Cell>
                <Cell className={styles.iframe2} width={4}>
                  <iframe src={"https://console.calculus.capital/"} className={styles.if2}></iframe>
                </Cell>
              </Grid>
            </div>
          </Cell>
          <Cell width={2} center middle className={styles.cell}></Cell>
          <Cell width={2} center className={styles.cell}>
            <Content className={styles.content}>
              <h2>Purchase</h2>
              <ul>
                <li>Purchase Financing</li>
                <li>Invoice Discounting</li>
              </ul>
              <h2>Sales</h2>
              <ul>
                <li>Invoice Discounting</li>
                <li>Receivables Financing</li>
              </ul>
            </Content>
          </Cell>
          <Cell width={1} center middle className={styles.cell}></Cell>
        </Grid>
      </div>
    </div>
  );
}

export { Intro };
