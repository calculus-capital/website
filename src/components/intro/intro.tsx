/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */

import React, { useEffect, useState } from "react";
import { Cell, Grid } from "styled-css-grid";
import { useMediaQuery } from "react-responsive";
import Slider from "./slider";
import { computed } from "./revenue";

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
import { Button, Content, Menu, Section } from "react-bulma-components";

type IntroProps = {};

const getPledge = (
  mrr: number,
  growth: number,
  volatility: number,
  ask: number
) => {
  return computed.filter((x) => {
    return (
      x.growth === growth &&
      Math.abs(mrr / ask - x.mrr / x.ask) <= 1 &&
      x.unviable === 0 &&
      x.successful / x.viable > 0.5
    );
  });
};

const unique = (a: any) =>
  // @ts-ignore
  [...new Set(a.map((o: any) => JSON.stringify(o)))].map((s) => JSON.parse(s));

function Intro(props: IntroProps) {
  const s = useMediaQuery({ query: "(max-width: 481px)" });
  const m = useMediaQuery({ query: "(max-width: 1100px)" });

  const [mrr, setMrr] = useState(100);
  const [mrrGrowth, setMrrGrowth] = useState(10);
  const [volatility, setVolatility] = useState(50);
  const [ask, setAsk] = useState(25);

  const [mp, setMp] = useState(1000);
  const [discount, setDiscount] = useState(3);
  const [wacc, setWacc] = useState(16);
  const [terms, setTerms] = useState(30);

  const pledgeSet = () =>
    getPledge(mrr, mrrGrowth, volatility, ask).map((p) => {
      return (
        <li>
          Pledge {p.pledge}% revenue for {p.tenure} days
        </li>
      );
    });
  const [pledges, setPledges] = useState(pledgeSet());

  useEffect(() => {
    setPledges(pledgeSet());
    return;
  }, [mrr, mrrGrowth, volatility, ask]);

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
                <Menu.List title={s ? "" : "Login"}>
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
      <p className={styles.revenueHeader}>Grow your Business</p>
      <p className={styles.revenueSubHeader}>with Revenue financing</p>
      <Grid
        columns={s ? 1 : 10}
        rows={s ? 2 : 1}
        className={styles.descriptionBlock}
      >
        <Cell width={s ? 1 : 5} top={s ? 2 : 1} center middle>
          <img src={revenueL} className={styles.revenueImage}></img>
        </Cell>
        <Cell width={s ? 1 : 5} top={s ? 1 : 1} enter middle>
          <Content className={styles.revenueDesc}>
            <ul>
              <li>
                <p className={styles.revenueDescList}>
                  Credit Limit upto ₹50lac
                </p>
              </li>
              <li>
                <p className={styles.revenueDescList}>Easy Onboarding</p>
              </li>
              <li>
                <p className={styles.revenueDescList}>Competitive Rates</p>
              </li>
              <li>
                <p className={styles.revenueDescList}>
                  Short, repeatable tenures
                </p>
              </li>
            </ul>
            <Grid columns={1} cecnter middle className={styles.revenueCalc}>
              <Cell>
                <Slider
                  label="Monthly recurring revenue (Lakhs): "
                  min={50}
                  max={1000}
                  init={mrr}
                  change={setMrr}
                  step={1}
                ></Slider>
              </Cell>
              <Cell>
                <Slider
                  label="MoM growth (%): "
                  min={5}
                  max={50}
                  init={mrrGrowth}
                  change={setMrrGrowth}
                  step={5}
                ></Slider>
              </Cell>
              {/* <Cell>
                <Slider
                  label="Volatility: "
                  min={0}
                  max={100}
                  init={volatility}
                  change={setVolatility}
                ></Slider>
              </Cell> */}
              <Cell>
                <Slider
                  label="Advance: "
                  min={0}
                  max={2 * mrr}
                  init={ask}
                  change={setAsk}
                  step={mrr / 4}
                ></Slider>
              </Cell>
              <Cell>
                <p>You may opt for the following choices:</p>
                <ul className={styles.revenueResult}>{pledges.slice(0, 5)}</ul>
              </Cell>
            </Grid>
            <img src={revenueR}></img>
          </Content>
        </Cell>
      </Grid>
      <p className={styles.earlypayHeader}>Early Pay Suppliers</p>
      <Grid
        columns={s ? 1 : 10}
        rows={s ? 2 : 1}
        className={styles.descriptionBlock}
      >
        <Cell width={s ? 1 : 5} top={s ? 1 : 2} center middle>
          <Content className={styles.earlypayDesc}>
            <img src={earlypayL} className={styles.earlypayImage}></img>
            <h2>Benefits</h2>
            <ul>
              <li>
                <p className={styles.earlypayDescList}>
                  Early payment discount from suppliers
                </p>
              </li>
              <li>
                <p className={styles.earlypayDescList}>
                  Onboard suppliers without friction
                </p>
              </li>
              <li>
                <p className={styles.earlypayDescList}>
                  Increase supplier stickiness by 30-50%
                </p>
              </li>
              <li>
                <p className={styles.earlypayDescList}>
                  Reduce supply risk with weak suppliers
                </p>
              </li>
            </ul>
          </Content>
        </Cell>
        <Cell width={s ? 1 : 5} top={s ? 2 : 2} enter middle>
          <Content className={styles.earlypayDesc}>
            <img src={earlypayR} className={styles.earlypayImage}></img>
            <h2>Benefits</h2>
            <ul>
              <li>
                <p className={styles.earlypayDescList}>Improved cash flows</p>
              </li>
              <li>
                <p className={styles.earlypayDescList}>
                  Reduced risks of order fulfillment
                </p>
              </li>
              <li>
                <p className={styles.earlypayDescList}>Impetus for expansion</p>
              </li>
              <li>
                <p className={styles.earlypayDescList}>
                  Reduce collections risks
                </p>
              </li>
            </ul>
          </Content>
        </Cell>
      </Grid>
      <Grid columns={1} cecnter middle className={styles.earlypayCalc}>
        <Cell>
          <p>Revenue from early payments:</p>
        </Cell>
        <Cell>
          <Slider
            label="Monthly recurring purchase (Lakhs): "
            min={100}
            max={10000}
            init={mp}
            change={setMp}
          ></Slider>
        </Cell>
        <Cell>
          <Slider
            label="Early payment discount (%): "
            min={0}
            max={7}
            init={discount}
            change={setDiscount}
          ></Slider>
        </Cell>
        <Cell>
          <Slider
            label="Cost of Capital: "
            min={10}
            max={24}
            init={wacc}
            change={setWacc}
          ></Slider>
        </Cell>
        <Cell>
          <Slider
            label="Payment terms (days): "
            min={10}
            max={90}
            init={terms}
            change={setTerms}
          ></Slider>
        </Cell>
        <Cell>
          <p>
            Generate additional revenue of:
            {" " +
              Math.round(
                (mp * discount) / 100 - mp * ((terms * wacc) / 100 / 365)
              )}
            Lakhs
          </p>
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
