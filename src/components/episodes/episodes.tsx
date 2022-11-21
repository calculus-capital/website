import React from "react";
import { Cell, Grid } from "styled-css-grid";
import { useMediaQuery } from "react-responsive";

// import earlyPaymentsMore from "../../assets/early-payments-more.png";
// import usecase1 from "../../assets/early-payments-usecase1.png";
// import usecase2 from "../../assets/early-payments-usecase2.png";

import styles from "../intro/intro.module.css";
import { Content } from "react-bulma-components";

interface Props {}

export const Episodes = (props: Props) => {
  const s = useMediaQuery({ query: "(max-width: 481px)" });
  const m = useMediaQuery({ query: "(max-width: 1100px)" });


  console.log("Episodes");
  return (
    <div className={styles.container}>
      <Grid columns={6} rows={1} className={styles.showcaseContainer}>
        <Cell width={1} height={1} hidden={s}></Cell>
        <Cell width={s ? 6 : 4} height={1}>
          <Showcase
            pic=""
            name="Chirag Hota"
            designation="Engineering Manager, Confluent"
            description="Chirag has been a veteran of the startup and the corporate worlds. Some of his mobile apps - redbus, limeroad, zoomcar, are used by millions of users."
            full={true}
          ></Showcase>
        </Cell>
        <Cell width={1} height={1} hidden={s}></Cell>
      </Grid>
      <Grid columns={6} rows={s ? 2 : 1} className={styles.showcaseContainer}>
        <Cell width={1} height={1} hidden={s}></Cell>
        <Cell width={s ? 6 : 4} height={1}>
          <Showcase
            pic=""
            name="Aniruddha Mazumdar"
            designation="Senior Mobile Engineer, EpiFi"
            description="Aniruddha is a seasoned engineer who has helped startups like redbus, practo, koo and epifi build successful businesses on mobile applications."
            full={true}
          ></Showcase>
        </Cell>
        <Cell width={1} height={1} hidden={s}></Cell>
      </Grid>
      <Grid columns={6} rows={s ? 2 : 1} className={styles.showcaseContainer}>
        <Cell width={1} height={1} hidden={s}></Cell>
        <Cell width={s ? 6 : 4} height={1}>
          <Showcase
            pic=""
            name="Abhishek Ramaswamy"
            designation="Director Of Analytics, Kaplan"
            description="Starting from simulation systems to leading analytics, data science and data engineering teams, Abhishek has been through an inspiring career."
            full={true}
          ></Showcase>
        </Cell>
        <Cell width={1} height={1} hidden={s}></Cell>
      </Grid>
    </div>
  );
};

function Showcase(props: { pic: string; name: string; designation: string; description: string; full: boolean }) {
  const s = useMediaQuery({ query: "(max-width: 481px)" });
  const m = useMediaQuery({ query: "(max-width: 1100px)" });

  return (
    <Grid columns={10} rows={4} className={styles.card}>
      <Cell height={s ? 2 : m && !props.full ? 2 : m ? 4 : 4} width={3} className={styles.cardImage}>
        <img src={props.pic} alt=""></img>
      </Cell>
      <Cell height={2} width={7} className={styles.cardHeading} center middle>
        <h1>{props.name}</h1>
        <h5>{props.designation}</h5>
      </Cell>
      <Cell width={s ? 7 : m && !props.full ? 10 : 7} height={2} className={styles.cardDescription}>
        <p>{props.description}</p>
      </Cell>
    </Grid>
  );
}
