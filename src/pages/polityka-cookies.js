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
        <title>Polityka Cookies - Centrum Rehabilitacji Bartosz Burzyński</title>
        <link rel="icon" href={favicon} />
        <meta name="theme-color" content="#0089b9"/>
      </Helmet>

      <Header
        activePage=""
      />

      <div className="page_title">
        <div className="container">
          <div className="title"><h1>Polityka cookies</h1></div>
        </div>
      </div>

      <div class="container">
        <div class="content_fullwidth">
          <h2>Czym są pliki cookies?</h2>
            <p>
              Pliki cookies to małe pliki tekstowe rejestrujące aktywność użytkownika online. Ułatwiają poruszanie się po witrynie oraz podejmowanie rozmaitych działań, ponieważ rozpoznają urządzenie Użytkownika i wywietlają stronę dopasowaną do jego indywidualnych preferencji. Ich wyłączenie może spowodować błędne działanie strony oraz brak dostępu do niektórych funkcji.
            </p>
            <p>
              <br />
              <strong>
                Jakiego rodzaju plików cookie używamy i w jaki sposób je wykorzystujemy?
              </strong>
            </p>
            <p>&nbsp;</p>
            <h2>Sesyjne pliki cookie</h2>
            <p>Pliki cookie pozwalające zapamiętać wybory dokonane przez Użytkownika i używane m.in. przy logowaniu. Pozostają na urządzeniu użytkownika do czasu wylogowania z serwisu lub zamknięcia przeglądarki.</p>
            <p>&nbsp;</p>
            <h2>Usuwanie plików cookies</h2>
            <p>Każdy rodzaj przeglądarki oferuje możliwość blokowania i kasowania plików cookie. Więcej informacji na temat zarządzania plikami cookie można uzyskać, korzystając z poniższych linków.</p>
            <p>
              <br /> » <a href="http://windows.microsoft.com/en-GB/windows7/How-to-manage-cookies-in-Internet-Explorer-9" target="_blank">Internet Explorer</a><br /> » <a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies" target="_blank">Firefox</a>
              <br /> » <a href="http://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Google Chrome</a>
              <br /> » <a href="http://support.apple.com/kb/PH5042" target="_blank">Safari</a>
            </p>
          </div>
      </div>


      <div class="clearfix mar_top5"></div>

      <Footer />
      <ScrollToTop />
      <CookiesBanner />
    </>
  )
}