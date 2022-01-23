/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */

import { useEffect, useState } from "react";
import { Cell, Grid } from "styled-css-grid";
import { useMediaQuery } from "react-responsive";
import Slider from "./slider";
import { computed } from "./revenue";

import revenueL from "../../assets/revenue-left.png";
import revenueR from "../../assets/revenue-right.png";

import earlypayL from "../../assets/early-payments-startup.png";
import earlypayR from "../../assets/early-payments-suppliers.png";

import pofin from "../../assets/po-financing.png";

import "bulma/css/bulma.min.css";
import styles from "./intro.module.css";
import { Button, Content } from "react-bulma-components";
import { Link } from "react-router-dom";

type IntroProps = {};

const getPledge = (mrr: number, growth: number, margin: number, ask: number) => {
  return computed.filter((x) => {
    return x.pd <= 10 && x.trapped > 80 && x.mrr === mrr && margin > x.pledge && x.growth === growth && Math.abs(ask - x.ask) <= 1;
  });
};

const unique = (a: any) =>
  // @ts-ignore
  [...new Set(a.map((o: any) => JSON.stringify(o)))].map((s) => JSON.parse(s));

function Intro(props: IntroProps) {
  const s = useMediaQuery({ query: "(max-width: 481px)" });
  const m = useMediaQuery({ query: "(max-width: 1100px)" });

  const [mrr, setMrr] = useState(100);
  const [mrrGrowth, setMrrGrowth] = useState(20);
  const [volatility, setVolatility] = useState(50);
  const [ask, setAsk] = useState(mrr*7/30);
  const [margin, setMargin] = useState(30)

  const [mp, setMp] = useState(1000);
  const [discount, setDiscount] = useState(3);
  const [wacc, setWacc] = useState(16);
  const [terms, setTerms] = useState(30);

  const pledgeSet = () => {
    const pledges = getPledge(mrr, mrrGrowth, margin, ask)
      .sort((x,y) => { return x.tenure > y.tenure ? 1 : -1 })
      .map((p) => {
        return (
          <li>
            Pledge {p.pledge}% revenue for {p.tenure} days
          </li>
        );
      });

    if (pledges.length < 3) return []
    else return pledges
  }
  const [pledges, setPledges] = useState(pledgeSet());

  useEffect(() => {
    setPledges(pledgeSet());
    return;
  }, [mrr, mrrGrowth, margin, ask]);

  return (
    <div className={styles.intro}>
      <p className={styles.revenueHeader}>Grow your Business</p>
      <p className={styles.revenueSubHeader}>with Revenue financing</p>
      <Grid columns={s ? 1 : 10} rows={s ? 2 : 1} className={styles.descriptionBlock}>
        <Cell width={s ? 1 : 5} top={s ? 2 : 1} center middle>
          <Content className={styles.revenueDesc}>
            <ul>
              <li>
                <p className={styles.revenueDescList}>Credit Limit upto ₹5Cr</p>
              </li>
              <li>
                <p className={styles.revenueDescList}>Easy Onboarding</p>
              </li>
              <li>
                <p className={styles.revenueDescList}>Competitive Rates</p>
              </li>
              <li>
                <p className={styles.revenueDescList}>Short, repeatable tenures</p>
              </li>
            </ul>
            <img src={revenueR}></img>
            <div className={styles.button}>
              <Link to="/revenue">Learn more</Link>
            </div>
          </Content>
          {/* <img src={revenueL} className={styles.revenueImage}></img> */}
        </Cell>
        <Cell width={s ? 1 : 5} top={s ? 1 : 1} enter middle>
          <Content className={styles.revenueDesc}>
            <p>Calculate!</p>
            <Grid columns={1} cecnter middle className={styles.revenueCalc}>
              <Cell>
                <Slider label="Monthly recurring revenue (₹ Lakh): " min={50} max={1000} init={mrr} change={setMrr} step={50}></Slider>
              </Cell>
              <Cell>
                <Slider label="MoM growth (%): " min={20} max={50} init={mrrGrowth} change={setMrrGrowth} step={5}></Slider>
              </Cell>
              <Cell>
                <Slider label="Margin (%): " min={30} max={50} value={margin} init={margin} change={setMargin} step={5}></Slider>
              </Cell>
              <Cell>
                <Slider label="Advance (₹ Lakh): " min={mrr*7/30} max={Math.min(mrr*35/30, 500)} init={ask} change={setAsk} step={7*mrr/30}></Slider>
              </Cell>
              <Cell>
                <p>Offers:</p>
                <ul className={styles.revenueResult}>{pledges.slice(0, 5)}</ul>
              </Cell>
            </Grid>
          </Content>
        </Cell>
      </Grid>
      <p className={styles.earlypayHeader}>Grow your Network</p>
      <div className={styles.network}>
        <Grid columns={5} className={styles.networkGrid}>
          <Cell className={styles.networkBlock} center middle>
            <p>Early Pay (Suppliers)</p>
          </Cell>
          <Cell className={styles.networkBlockArrow} center middle>
            <p>🡠</p>
          </Cell>
          <Cell className={styles.networkBlock} center middle>
            <p>Startup</p>
          </Cell>
          <Cell className={styles.networkBlockArrow} center middle>
            <p>🡠</p>
          </Cell>
          <Cell className={styles.networkBlock} center middle>
            <p>Early Collect (Distributors)</p>
          </Cell>
        </Grid>
      </div>
      <p className={styles.earlypayHeader}>Early Pay Suppliers</p>
      <Grid columns={s ? 1 : 10} rows={s ? 2 : 1} className={styles.descriptionBlock}>
        <Cell width={s ? 1 : 5} top={s ? 1 : 2} center middle>
          <Content className={styles.earlypayDesc}>
            <img src={earlypayL} className={styles.earlypayImage}></img>
            <h2>Benefits</h2>
            <ul>
              <li>
                <p className={styles.earlypayDescList}>Early payment discount from suppliers</p>
              </li>
              <li>
                <p className={styles.earlypayDescList}>Onboard suppliers without friction</p>
              </li>
              <li>
                <p className={styles.earlypayDescList}>Increase supplier stickiness by 30-50%</p>
              </li>
              <li>
                <p className={styles.earlypayDescList}>Reduce supply risk with weak suppliers</p>
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
                <p className={styles.earlypayDescList}>Reduced risks of order fulfillment</p>
              </li>
              <li>
                <p className={styles.earlypayDescList}>Impetus for expansion</p>
              </li>
              <li>
                <p className={styles.earlypayDescList}>Reduce collections risks</p>
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
          <Slider label="Monthly recurring purchase (₹ Lakh): " min={100} max={10000} init={mp} change={setMp}></Slider>
        </Cell>
        <Cell>
          <Slider label="Early payment discount (%): " min={0} max={7} init={discount} change={setDiscount}></Slider>
        </Cell>
        <Cell>
          <Slider label="Cost of Capital (% per annum): " min={10} max={24} init={wacc} change={setWacc}></Slider>
        </Cell>
        <Cell>
          <Slider label="Payment terms (days): " min={10} max={90} init={terms} change={setTerms}></Slider>
        </Cell>
        <Cell>
          <p>
            Generate additional revenue of:
            {" ₹ " + Math.round((mp * discount) / 100 - mp * ((terms * wacc) / 100 / 365)) + " Lakh"}
          </p>
        </Cell>
      </Grid>
      <div className={styles.button}>
        <Link to="/early-pay">Learn more</Link>
      </div>
      <p className={styles.earlypayHeader}>Get Paid Early from Distributors</p>
      <Grid columns={s ? 1 : 10} rows={s ? 2 : 1} className={styles.descriptionBlock}>
        <Cell width={s ? 1 : 10} top={s ? 1 : 1} enter middle>
          <img src={pofin} className={styles.poImage}></img>
        </Cell>
      </Grid>
      <div className={styles.button}>
        <Link to="/early-collect">Learn more</Link>
      </div>
      {/* <p className={styles.earlypayHeader}>A console to do it all</p>
      <Grid columns={s ? 1 : 10} rows={s ? 10 : 1} className={styles.descriptionBlock}>
        <Cell width={s ? 1 : 10} height={s ? 9 : 1} top={s ? 2 : 2} center middle>
          <div className={styles.knob}>
            <iframe src={"https://console.calculus.capital/"} className={styles.if2}></iframe>
          </div>
        </Cell>
      </Grid> */}
    </div>
  );
}

export { Intro };
