import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scrolltotop";
import { CookiesBanner } from "../components/cookies";

export default () => {
  return (
    <>
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
		        <form action="/kontakt/" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <fieldset>
                Email:<br /><input type="email" name="email" placeholder="podaj adres email..." className="input_bg" maxlength="50" required="" /><br /><br />
                Treść:<br /><textarea type="text" name="tresc" placeholder="twoje zapytanie..." style={{ height: "250px" }} className="textarea_bg" required=""></textarea>
                <br />
            		<input className="comment_submit" type="submit" value="Wyślij" style={{ float:"right", marginRight: "40px"}} />
              </fieldset>
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