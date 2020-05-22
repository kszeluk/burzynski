import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scrolltotop";
import { CookiesBanner } from "../components/cookies";

export default () => {
  return (
    <>
      <Header
        activePage=""
      />

      <div className="page_title">
        <div className="container">
          <div className="title"><h1>Error 404</h1></div>
        </div>
      </div>

      <div class="container">
        <div class="content_fullwidth">
          <div class="error_pagenotfound">
            <strong>404</strong> <br /> Oops... Page Not Found!<br /> <em>Sorry the Page Could not be Found here.</em>
            <p>Try using the button below to go to main page of the site</p>
            <div class="clearfix mar_top3">&nbsp;</div>
            <a class="but_goback" href="/">&nbsp; Strona główna</a>
          </div>
        </div>
      </div>

      <div class="clearfix mar_top5"></div>

      <Footer />
      <ScrollToTop />
      <CookiesBanner />
    </>
  )
}