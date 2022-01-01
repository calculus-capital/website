/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */

import React, { useEffect, useState } from "react";
import { Cell, Grid } from "styled-css-grid";
import { useMediaQuery } from "react-responsive";

import logo from "../../assets/logo.png";
import halo from "../../assets/halo1.png";
import systemImg from "../../assets/system4.png";
import structure from "../../assets/structure.png";
import avail from "../../assets/avail.png";
import liquidity from "../../assets/liquidity.png";
import trade from "../../assets/network.png";

import "bulma/css/bulma.min.css";
import styles from "./intro.module.css";
import { Content, Menu, Section } from "react-bulma-components";

type IntroProps = {};

function Intro(props: IntroProps) {
  const s = useMediaQuery({ query: "(max-width: 481px)" });
  const m = useMediaQuery({ query: "(max-width: 1100px)" });

  return (
    <div className={styles.intro}>
      <div className={styles.introHeader}>
        <Grid columns={10} flow="row" className={styles.grid}>
          {s ? (
            <></>
          ) : (
            <Cell width={1} center middle className={styles.cell}>
              <div className={styles.logo}>
                <img src={logo}></img>
              </div>
            </Cell>
          )}
          <Cell width={s ? 4 : m ? 4 : 4} center middle className={styles.cell}>
            <div className={styles.calculus}>
              <p className={styles.neonText}>Calculus Capital</p>
            </div>
            <div className={styles.separator350}></div>
            <div className={styles.calculusAbout}>
              <p>
                Structured Financing<br></br>
                For Startups
              </p>
            </div>
          </Cell>
          <Cell width={s ? 4 : m ? 3 : 4} className={styles.cell}></Cell>
          <Cell width={s ? 2 : m ? 2 : 1} className={styles.cell}>
            <Section className={styles.menu}>
              <Menu>
                <Menu.List title={s ? "" : "Demo"}>
                  <Menu.List.Item>
                    <a
                      className={styles.notionLink}
                      href="https://console.calculus.capital/"
                      target="_blank"
                    >
                      Console
                    </a>
                  </Menu.List.Item>
                </Menu.List>
                <Menu.List title={s ? "" : "Documentation"}>
                  <Menu.List.Item>
                    <a
                      className={styles.notionLink}
                      href="https://calculus-capital.notion.site/Case-Studies-a6f4d3e8e5214e28b2f3c6e5cba3e7ae"
                      target="_blank"
                    >
                      Case Studies
                    </a>
                  </Menu.List.Item>
                  <Menu.List.Item>
                    <a
                      className={styles.notionLink}
                      href="https://calculus-capital.notion.site/Usecases-6ef2163278da4990ae027bc2c5e3b1f7"
                      target="_blank"
                    >
                      Usecases
                    </a>
                  </Menu.List.Item>
                </Menu.List>
                <Menu.List title={s ? "" : "About"}>
                  <Menu.List.Item>
                    <a
                      className={styles.notionLink}
                      href="https://calculus-capital.notion.site/About-Us-33613fb172fa4d10a23ace098e756781"
                      target="_blank"
                    >
                      Team
                    </a>
                  </Menu.List.Item>
                </Menu.List>
              </Menu>
            </Section>
          </Cell>
        </Grid>
      </div>
      <Grid columns={s ? 1 : 10} rows={1} className={styles.descriptionBlock}>
        <Cell width={s ? 1 : 3} center middle>
          <p className={styles.descriptionText}>
            Structure your financial requirements by tranches of risk
          </p>
        </Cell>
        <Cell width={s ? 1 : 7} center middle>
          <img src={structure} className={styles.structure}></img>
        </Cell>
      </Grid>
      <Grid columns={s ? 1 : 10} rows={1} className={styles.descriptionBlock}>
        <Cell width={s ? 1 : 7} center middle>
          <img src={avail} className={styles.structure}></img>
        </Cell>
        <Cell width={s ? 1 : 3} center middle>
          <p className={styles.descriptionTextR}>
            Avail capital from banks to private lenders depending on risk
            profile of tranche
          </p>
        </Cell>
      </Grid>
      <Grid columns={s ? 1 : 10} rows={1} className={styles.descriptionBlock}>
        <Cell width={s ? 1 : 3} center middle>
          <p className={styles.descriptionText}>
            Grow your supply network with trade financing
          </p>
        </Cell>
        <Cell width={s ? 1 : 7} center middle>
          <img src={trade} className={styles.structure}></img>
        </Cell>
      </Grid>
      <Grid columns={s ? 1 : 10} rows={1} className={styles.descriptionBlock}>
        <Cell width={s ? 1 : 8} center middle>
          <div className={styles.knob}>
            <iframe
              src={"https://console.calculus.capital/"}
              className={styles.if2}
            ></iframe>
          </div>
        </Cell>
        <Cell width={s ? 1 : 2} center middle>
          <p className={styles.descriptionTextR}>
            A console to do it all
          </p>
        </Cell>
      </Grid>
    </div>
  );
}

export { Intro };
