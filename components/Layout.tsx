import React, { ReactNode } from 'react'
import Head from 'next/head'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { Container, makeStyles } from '@material-ui/core';

type Props = {
  children?: ReactNode
  title?: string
}

const useStyle = makeStyles({
  containerBody: {
    backgroundColor: '#1a1c33'
  },
  contentMargin: {
    marginTop: '1rem'
  }
})

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  //Can Pass in Props for SEO Purposes
  const classes = useStyle();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Container className={classes.containerBody}>
        <main className={classes.contentMargin}>
          {children}
        </main>
      </Container>
      <Footer />
    </>
  )

}

export default Layout
