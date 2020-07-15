import React from "react";

import { PageTemplate } from "../components/pageTemplate";

export default () => {
  return (
    <PageTemplate
      pageTitle="Kontakt"
      title="Kontakt"
      activePage="kontakt"
    >
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
    </PageTemplate>
  )
}