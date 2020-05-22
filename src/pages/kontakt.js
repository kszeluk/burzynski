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
        <title>Kontakt - Centrum Rehabilitacji Bartosz Burzyński</title>
        <meta name="description" content="Proponujemy fizjoterapię, którą przeprowadzamy w profesjonalnym gabinecie oraz w domu pacjenta. Terapia prowadzona jest przez wyspecjalizowanych fizjoterapeutów każdorazowo ma ona charakter kompleksowy oraz indywidualny." />
        <link rel="icon" href={favicon} />
        <meta name="theme-color" content="#0089b9"/>
      </Helmet>

      <Header
        activePage="kontakt"
      />

      <div className="page_title">
        <div className="container">
          <div className="title"><h1>Kontakt</h1></div>
        </div>
      </div>

      <div className="container">
        <div className="content_fullwidth">
          <div style={{ width: "50%", float:"right"}} className="rightBoxForm">
            <div className="address-info">
              <h3>Dane kontaktowe:</h3>
              <p><strong>Mgr Lilianna Jaworska</strong><br />Tel.: +48 693 501 822</p>
              <p><strong>Mgr Bartosz Burzyński</strong><br /> Tel.: +48 604 442 837</p>
              <p><strong>&nbsp;</strong></p>
              <p><strong>Kontakt Biuro:</strong><br />E-mail: kontakt@rehabilitacjaburzynski.pl</p>
              <p>&nbsp;</p>
            </div>
            <div className="clearfix">&nbsp;</div>
            <div className="address-info">
            <h3>Dane adresowe</h3>
            <ul className="contact_address">
              <li>ul. PRUSA 38-40/23 (parter)<br />&nbsp; &nbsp; &nbsp;50-319 WROCŁAW</li>
              <li></li>
              <li>ul. ŁYSKORNIA 15</li>
              <li>&nbsp; &nbsp; &nbsp;98-350 BIAŁA / k.Wielunia</li>
              <li></li>
            </ul>
            <ul className="contact_address">
              <li></li>
              <li>Dojazd do pacjenta:</li>
              <li>&nbsp; &nbsp; &nbsp; Wrocław, Wieluń, Wieruszów</li>
            </ul>
          </div>	
    		</div>
		    <div style={{ width: "50%", float: "left" }} className="lefttBoxForm">
		      <h2>Formularz kontaktowy</h2>
		        <form name="kontakt" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you">
              <input type="hidden" name="form-name" value="kontakt" />
              <p>
                <label>
                  Email:
                  <br />
                  <input type="email" name="email" className="input_bg" />
                  <br />
                </label>
              </p>
              <p>
                <label>
                  <br />
                  Treść:
                  <br />
                  <textarea type="text" name="tresc" placeholder="twoje zapytanie..." style={{ height: "250px" }} className="textarea_bg" required="" />
                  <br />
                </label>
              </p>
              <p>
                <button type="submit" className="comment_submit">Wyślij</button>
              </p>
            </form>
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