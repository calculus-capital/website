/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */

import { useEffect, useState } from "react";
import { Cell, Grid } from "styled-css-grid";
import { useMediaQuery } from "react-responsive";
import Slider from "./slider";
import { computed } from "./revenue";

// import revenueL from "../../assets/revenue-left.png";
// import revenueR from "../../assets/revenue-right.png";

// import earlypayL from "../../assets/early-payments-startup.png";
// import earlypayR from "../../assets/early-payments-suppliers.png";

import pofin from "../../assets/po-financing.png";

import "bulma/css/bulma.min.css";
import styles from "./intro.module.css";
import { Button, Content, Heading, Media } from "react-bulma-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faApple, faAudible, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { Header } from "components/header/header";
import { prototype } from "events";

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

  return (
    <div className={styles.intro}>
      <p className={styles.subscribeHeader}>Subscribe to the podcast</p>
      <Grid columns={4} className={styles.descriptionBlock}>
        <Cell>
          <div className={styles.subscribe}>
            <a href="https://spotify.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSpotify} />
            </a>
          </div>
          <p className={styles.subscribeService}>Spotify</p>
        </Cell>
        <Cell>
          <div className={styles.subscribe}>
            <a href="https://apple.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faApple} />
            </a>
          </div>
          <p className={styles.subscribeService}>Apple</p>
        </Cell>
        <Cell>
          <div className={styles.subscribe}>
            <a href="https://audible.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faAudible} />
            </a>
          </div>
          <p className={styles.subscribeService}>Audible</p>
        </Cell>
        <Cell>
          <div className={styles.subscribe}>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGooglePlay} />
            </a>
          </div>
          <p className={styles.subscribeService}>Google</p>
        </Cell>
      </Grid>
      <Grid columns={6} rows={1} className={styles.showcaseContainer}>
        <Cell width={s ? 0 : m ? 0 : 1} height={1} hidden={s || m}></Cell>
        <Cell width={s ? 6 : m ? 6 : 4} height={1}>
          <Showcase
            pic="http://bulma.io/images/placeholders/128x128.png"
            name="Chirag Hota"
            designation="Engineering Manager, Confluent"
            description="Chirag has been a veteran of the startup and the corporate worlds. Some of his mobile apps - redbus, limeroad, zoomcar, are used by millions of users."
            full={true}
          ></Showcase>
        </Cell>
        <Cell width={s ? 0 : m ? 0 : 1} height={1} hidden={s || m}></Cell>
      </Grid>
      <Grid columns={6} rows={s ? 2 : 1} className={styles.showcaseContainer}>
        <Cell width={s ? 6 : 3} height={1}>
          <Showcase
            pic="http://bulma.io/images/placeholders/128x128.png"
            name="Aniruddha Mazumdar"
            designation="Senior Mobile Engineer, EpiFi"
            description="Aniruddha is a seasoned engineer who has helped startups like redbus, practo, koo and epifi build successful businesses on mobile applications."
            full={false}
          ></Showcase>
        </Cell>
        <Cell width={s ? 6 : 3} height={1}>
          <Showcase
            pic="http://bulma.io/images/placeholders/128x128.png"
            name="Abhishek Ramaswamy"
            designation="Director Of Analytics, Kaplan"
            description="Starting from simulation systems to leading analytics, data science and data engineering teams, Abhishek has been through an inspiring career."
            full={false}
          ></Showcase>
        </Cell>
      </Grid>
      <div className={styles.button}>
        <Link to="/episodes">More Episodes</Link>
      </div>
    </div>
  );
}

function Showcase(props:{pic:String, name:String, designation:String, description:String, full:Boolean})  {
  const s = useMediaQuery({ query: "(max-width: 481px)" });
  const m = useMediaQuery({ query: "(max-width: 1100px)" });

  return (
    <Grid columns={4} rows={4} className={styles.card}>
      <Cell height={s ? 2 : m && props.full ? 4 : m ? 2 : 4} width={2} className={styles.cardImage}>
        <img src="http://bulma.io/images/placeholders/128x128.png"></img>
      </Cell>
      <Cell height={2} width={2} className={styles.cardHeading} center middle>
        <h1>{props.name}</h1>
        <h5>{props.designation}</h5>
      </Cell>
      <Cell width={s ? 4 : m ? 4 : 2} height={2} className={styles.cardDescription}>
        <p>{props.description}</p>
      </Cell>
    </Grid>
  );
}

export { Intro };
