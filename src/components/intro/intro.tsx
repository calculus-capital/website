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

import revenueL from "../../assets/revenue-left.png";
import revenueR from "../../assets/revenue-right.png";

import earlypayH from "../../assets/early-payments-heading.png";
import earlypayL from "../../assets/early-payments-startup.png";
import earlypayR from "../../assets/early-payments-suppliers.png";

import pofin from "../../assets/po-financing.png";

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
          <Cell width={s ? 6 : m ? 4 : 4} center middle className={styles.cell}>
            <div className={styles.calculus}>
              <p className={styles.neonText}>Calculus Capital</p>
            </div>
            <div className={styles.separator350}></div>
            <div className={styles.calculusAbout}>
              <p>
                Powering growth<br></br>
                For Startups
              </p>
            </div>
          </Cell>
          <Cell width={s ? 1 : m ? 3 : 4} className={styles.cell}></Cell>
          <Cell width={s ? 1 : m ? 2 : 1} className={styles.cell}>
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
      <Grid
        columns={s ? 1 : 10}
        rows={s ? 2 : 1}
        className={styles.descriptionBlock}
      >
        <Cell width={s ? 1 : 5} top={s ? 2 : 1} center middle>
          <img src={revenueL} className={styles.revenueImage}></img>
        </Cell>
        <Cell width={s ? 1 : 5} top={s ? 1 : 1} enter middle>
          <img src={revenueR} className={styles.revenueImage}></img>
        </Cell>
      </Grid>
      <p className={styles.earlypayHeader}>Early Pay Suppliers</p>
      <Grid
        columns={s ? 1 : 10}
        rows={s ? 2 : 1}
        className={styles.descriptionBlock}
      >
        <Cell width={s ? 1 : 5} top={s ? 1 : 2} center middle>
          <img src={earlypayL} className={styles.earlypayImage}></img>
        </Cell>
        <Cell width={s ? 1 : 5} top={s ? 2 : 2} enter middle>
          <img src={earlypayR} className={styles.earlypayImage}></img>
        </Cell>
      </Grid>
      <p className={styles.earlypayHeader}>Finance your orders</p>
      <Grid
        columns={s ? 1 : 10}
        rows={s ? 2 : 1}
        className={styles.descriptionBlock}
      >
        <Cell width={s ? 1 : 10} top={s ? 1 : 1} enter middle>
          <img src={pofin} className={styles.poImage}></img>
        </Cell>
      </Grid>
      <p className={styles.earlypayHeader}>A console to do it all</p>
      <Grid
        columns={s ? 1 : 10}
        rows={s ? 10 : 1}
        className={styles.descriptionBlock}
      >
        <Cell
          width={s ? 1 : 10}
          height={s ? 9 : 1}
          top={s ? 2 : 2}
          center
          middle
        >
          <div className={styles.knob}>
            <iframe
              src={"https://console.calculus.capital/"}
              className={styles.if2}
            ></iframe>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export { Intro };
