/* eslint-disable react/jsx-no-target-blank */
import { Cell, Grid } from "styled-css-grid";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import styles from "./header.module.css";
import "bulma/css/bulma.min.css";
import { Menu, Section } from "react-bulma-components";

type HeaderProps = {};

function Header(props: HeaderProps) {
  const s = useMediaQuery({ query: "(max-width: 481px)" });
  const m = useMediaQuery({ query: "(max-width: 1100px)" });

  return (
    <div className={styles.introHeader}>
      <Grid columns={10} flow="row" className={styles.grid}>
        {s ? (
          <></>
        ) : (
          <Cell width={2} center middle className={styles.cell}>
            <div className={styles.logo}>
              <img src={logo}></img>
            </div>
          </Cell>
        )}
        <Cell width={s ? 6 : m ? 5 : 5} center middle className={styles.cell}>
          <div className={styles.eob}>
            <p className={styles.neonText}>Engineers of Bangalore</p>
          </div>
          <div className={styles.separator350}></div>
          <div className={styles.eobAbout}>
            <p>
              Leaders who <br></br>
              take tech to the moon.
            </p>
          </div>
        </Cell>
        <Cell width={s ? 1 : m ? 1 : 2} className={styles.cell}></Cell>
        <Cell width={s ? 2 : m ? 2 : 1} className={styles.cell}>
          <Section className={styles.menu}>
            <Menu>
              <Menu.List title={s ? "" : "Navigate"}>
                <Menu.List.Item>
                  <Link className={styles.notionLink} to="/">
                    Home
                  </Link>
                </Menu.List.Item>
                <Menu.List.Item>
                  <Link className={styles.notionLink} to="/episodes">
                    Episodes
                  </Link>
                </Menu.List.Item>
                <Menu.List.Item>
                  <a className={styles.notionLink} href="https://community.engineersofbangalore.com/" target="_blank">
                    Community
                  </a>
                </Menu.List.Item>
                <Menu.List.Item>
                  <Link className={styles.notionLink} to="/contact">
                    Talk to us
                  </Link>
                </Menu.List.Item>
              </Menu.List>
            </Menu>
          </Section>
        </Cell>
      </Grid>
    </div>
  );
}

export { Header };
