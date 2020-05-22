import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scrolltotop";
import { CookiesBanner } from "../components/cookies";

export default () => {
  return (
    <>
      <Header
        activePage="o-firmie"
      />
      <div class="page_title">
          <div class="container">
              <div class="title"><h1>O firmie</h1></div>
          </div>
      </div>
      <div class="container">
        <div class="content_fullwidth">
          <div class="two_third">
            <h2><strong>Poznaj naszą firmę</strong></h2>
            <p><strong>Proponujemy fizjoterapię,</strong> którą przeprowadzamy w <em>profesjonalnym gabinecie</em> oraz w domu pacjenta. Terapia prowadzona jest przez wyspecjalizowanych fizjoterapeutów każdorazowo ma ona charakter kompleksowy oraz indywidualny.</p>
            <p>&nbsp;</p>
            <div class="big_text1">Dla każdego pacjenta dobieramy <em>odpowiednią terapię</em>.</div>
            <p>Priorytetem dla Nas jest osiągnięcie wysokiej skuteczności terapii, dzięki czemu może nastąpić szybki powrót do pełni zdrowia, a tym samym do normalnego funkcjonowania. Cały czas poszerzamy swoje kwalifikacje poprzez specjalistyczne kursy doskonalące.</p>
          </div>
          <div class="one_third last">&nbsp;
            <img src="http://www.rehabilitacjaburzynski.pl/images/upload/my.jpg" alt="" width="225" height="300" />
          </div>
        </div>
      </div>

      <div className="clearfix mar_top5"></div>
      <Footer />
      <ScrollToTop />
      <CookiesBanner />
    </>
  )
}