import React from "react";

import footerMap from "../styles/images/footer-wmap.png";

export const Footer = () => {
  return (
    <>
      <div className="clearfix"></div>
      <div className="footer">
        <div className="container">

            <div className="one_third">
                <h2>Adres i <i>Kontakt</i></h2>
                <ul className="contact_address">
                    <li><i className="fa fa-map-marker fa-lg"></i>&nbsp; ul. PRUSA 38-40/23 (parter)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  50-319 Wrocław</li>
                    <li><i className="fa fa-map-marker fa-lg"></i>&nbsp; ul. ŁYSKORNIA 15<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;98-350 BIAŁA / k.Wielunia</li>
                    <li><i className="fa fa-phone"></i>&nbsp; +48 604 442 837 </li>
                    <li><i className="fa fa-location-arrow"></i>&nbsp; Dojazd do pacjenta:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wrocław, Wieluń, Wieruszów </li>
                    <li><img src={footerMap} alt="" /></li>
                </ul>

            </div>

            <div className="one_fourth">
                <h2>Przydatne <i>Linki</i></h2>
                <ul className="list">
                    <li><a href="./"><i className="fa fa-angle-right"></i> Strona główna</a></li>
                    <li><a href="/o-firmie/"><i className="fa fa-angle-right"></i> O firmie</a></li>
                    <li><a href="/oferta/"><i className="fa fa-angle-right"></i> Oferta</a></li>
                    <li><a href="/cennik/"><i className="fa fa-angle-right"></i> Cennik</a></li>
                    <li><a href="/o-nas/"><i className="fa fa-angle-right"></i> O nas</a></li>
                    <li><a href="/kontakt/"><i className="fa fa-angle-right"></i> Kontakt</a></li>
                </ul>
            </div>

            <div className="one_fourth">
                <h2>Nasze <i>metody</i></h2>
                <ul className="list">
                    <li><a href="/nasze-metody/elektroterapia/"><i className="fa fa-angle-right"></i> Elektroterapia</a></li>
                    <li><a href="/nasze-metody/ultradzwieki/"><i className="fa fa-angle-right"></i> Ultradźwieki</a></li>
                    <li><a href="/nasze-metody/terapia-swiatlem/"><i className="fa fa-angle-right"></i> Terapia światłem</a></li>
                    <li><a href="/nasze-metody/kinesiology-taping/"><i className="fa fa-angle-right"></i> Kinesiology taping</a></li>
                    <li><a href="/nasze-metody/taping-sztywny/"><i className="fa fa-angle-right"></i> Taping sztywny</a></li>
                    <li><a href="/nasze-metody/masaz/"><i className="fa fa-angle-right"></i> Masaż</a></li>
                    <li><a href="/nasze-metody/techniki-osteopatyczne/"><i className="fa fa-angle-right"></i> Techniki osteopatyczne</a></li>
                </ul>
            </div>

        </div>

        <div className="clearfix"></div>
      </div>
      <div class="copyright_info">
          <div class="container">
              <div class="one_half">
                  <b>© 2020 Centrum Rehabilitacji | <a href="/polityka-cookies/">Polityka cookies</a></b>
                  <br />
                  <b>Projekt strony www: <a href="http://www.creosoft.pl">Creosoft</a></b>
              </div>
          </div>
      </div>
    </>
  )
}