import React from "react";
import { Helmet } from "react-helmet";

import { Header } from "./header";
import { Footer } from "./footer";
import { ScrollToTop } from "./scrolltotop";
import { CookiesBanner } from "./cookies";

import favicon from "../styles/images/favicon.ico";

export const PageTemplate = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${props.pageTitle} ${props.pageTitle && "-"} `} Centrum Rehabilitacji Bartosz Burzyński</title>
        <meta name="description" content="Proponujemy fizjoterapię, którą przeprowadzamy w profesjonalnym gabinecie oraz w domu pacjenta. Terapia prowadzona jest przez wyspecjalizowanych fizjoterapeutów każdorazowo ma ona charakter kompleksowy oraz indywidualny." />
        <link rel="icon" href={favicon} />
        <meta name="theme-color" content="#0089b9"/>
      </Helmet>

      <Header
        activePage={props.activePage}
      />
      { props.title && (
        <div class="page_title">
          <div class="container">
              <div class="title"><h1>{props.title}</h1></div>
          </div>
        </div>
      )}

      {props.children}

      <div className="clearfix mar_top5"></div>
      <Footer />
      <ScrollToTop />
      <CookiesBanner />
    </>
  )
}