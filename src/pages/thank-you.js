import React from "react";
import { Helmet } from "react-helmet";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scrolltotop";
import { CookiesBanner } from "../components/cookies";

import favicon from "../styles/images/favicon.ico";


export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Centrum Rehabilitacji Bartosz Burzyński</title>
        <link rel="icon" href={favicon} />
        <meta name="theme-color" content="#0089b9"/>
      </Helmet>

      <Header
        activePage=""
      />

      <div className="page_title">
        <div className="container">
          <div className="title"><h1>Dziękujemy</h1></div>
        </div>
      </div>

      <div className="container">
        <div className="content_fullwidth">
          <div style={{ width: "100%", float:"right"}} className="rightBoxForm">
            <div className="address-info">
              <h3>Otrzymaliśmy twoją wiadomość.</h3>
              <br />
              <p>
                Dziękujemy za wiadomość. <br />
                <a href="/">
                  Wróć do strony głównej
                </a>
              </p>
            </div>
          </div>	
    		</div>
      </div>

      <div class="clearfix mar_top5" />

      <Footer />
      <ScrollToTop />
      <CookiesBanner />
    </>
  )
}