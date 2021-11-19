import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import styles from './footer.module.css'

function FooterLinks(props: {links:Array<string>}) {
  var subcomp = props.links.map(function (link) {
    return 	(
      <Cell>
        <a href={"#"+link} className={styles.footerlink}>{link}</a>
      </Cell>
    )
  })

  return (
    <Grid columns={3} flow="row">
      {subcomp}
    </Grid>
  )
}

function Footer() {
  return (
    <div className={styles.footer}>
      <FooterLinks links={[
        "Industries", "Usecases", "Case Studies",
        "Pricing", "Contact", "About Us"]}></FooterLinks>
    </div>
  )
}

export { Footer }
