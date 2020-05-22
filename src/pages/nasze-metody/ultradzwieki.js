import React from "react";
import { Helmet } from "react-helmet";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ListSection } from "../../components/listSection";
import { ScrollToTop } from "../../components/scrolltotop";
import { CookiesBanner } from "../../components/cookies";

import ultradwiki from "../../styles/images/ultradwiki.png";
import ultradwiki2 from "../../styles/images/ultradwiki_2.jpg";
import favicon from "../../styles/images/favicon.ico";

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ultradźwięki - Centrum Rehabilitacji Bartosz Burzyński</title>
        <link rel="icon" href={favicon} />
        <meta name="theme-color" content="#0089b9"/>
      </Helmet>

      <Header
        activePage="nasze-metody"
      />

      <div className="page_title">
        <div className="container">
          <div className="title"><h1>Ultradźwięki</h1></div>
        </div>
      </div>

      <div class="container">
        <div class="content_fullwidth">
          <div class="two_third">
            <h3>O urządzeniu</h3>
            <p><strong>Aparat BTL-4710 Smart</strong> służy do terapii ultradźwiękowej. Jest wysoce ceniony wśród terapeutów ze względu na zaproponowane protokoły usprawniania i wbudowaną encyklopedie terapeutyczną. Posiada dodatkowo podgrzewaną głowicę ultradźwiękową. Jest jednym z najlepszych aparatów do terapii ultradźwiękowej. Posiada aktualne atesty od producenta.</p>
          </div>

          <div class="one_third last">
            <img class="image_left1" src={ultradwiki} alt="" width="275" height="275" />
          </div>
          <div class="clearfix">&nbsp;</div>
          <div class="two_third">
            <h3>O zabiegu</h3>
            <p>Podczas zabiegu wykorzystywane są <strong>drgania mechaniczne</strong>. Efektem działania ultradźwięków na tkanki jest działanie mechaniczne zwane „mikromasażem”. Istotną składową ich działania jest wpływ na biochemię tkanek, co prowadzi do ich lepszego utleniania.</p>
          </div>
          <div class="one_third last">
            <img class="image_left1" src={ultradwiki2} alt="" width="275" height="184" />
          </div>
          <div class="clearfix">&nbsp;</div>
          <p>&nbsp;</p>
          <div class="one_third">
            <ListSection
              title="Kiedy stosować zabieg?"
              listItems={[
                " Zespoły bólowe mięśniowe, stawów i kręgosłupa, bóle krzyża",
                " Zwyrodnienie kręgosłupa",
                " Nieczynne i podostre zapalenie stawu, skręcenia",
                " Obrzęk podostry i przewlekły",
                " Naciągnięcie mięśni",
                " Zapalenie pochewki ścięgnistej, kaletki maziowej, nadkłykci, ścięgien",
                " Zespół Sudecka",
                " Przewlekła choroba zwyrodnieniowa stawów",
                " Choroba Raynaud",
                " Rwa kulszowa",
                " Krwiak podostry i przewlekły",
                " Nerwobóle",
                " Przykurcze",
                " Ostrogi piętowe",
                " Zespół bolesnego łokcia i barku",
                " Blizny ostre i podostre, bliznowiec",
                " Zrosty"
              ]}
            />
          </div>
          <div class="one_third">
            <ListSection
              title="Jakie są rezultaty zabiegu?"
              listItems={[
                " Rozszerzenie naczyń krwionośnych",
                " Wzrost elastyczności kolagenu i przepuszczalności błon",
                " Uelastycznienie blizn",
                " Zmniejszenie przykurczów",
                " Poprawa odżywienia tkanek",
                " Przeciwzapalne, przeciwbólowe, przeciwobrzękowe"
              ]}
            />              
          </div>
          <div class="one_third last">
            <ListSection
              title="Kiedy nie stosować zabiegu?"
              listItems={[
                " Kobieta w ciąży",
                " Choroba nowotworowa",
                " Rozrusznik serca",
                " Implanty metalowe"
              ]}
            />              
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