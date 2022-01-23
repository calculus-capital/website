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
                  <a className={styles.notionLink} href="https://console.calculus.capital/" target="_blank">
                    Console
                  </a>
                </Menu.List.Item>
              </Menu.List>
              <Menu.List title={s ? "" : "Products"}>
                <Menu.List.Item>
                  <Link className={styles.notionLink} to="/">
                    Revenue
                  </Link>
                </Menu.List.Item>
                <Menu.List.Item>
                  <Link className={styles.notionLink} to="/early-pay">
                    Early Pay
                  </Link>
                </Menu.List.Item>
                <Menu.List.Item>
                  <Link className={styles.notionLink} to="/early-collect">
                    Early Collect
                  </Link>
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
  );
}

export { Header };
