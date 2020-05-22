import React from "react";
import { Helmet } from "react-helmet";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ScrollToTop } from "../../components/scrolltotop";
import { CookiesBanner } from "../../components/cookies";

import taping1 from "../../styles/images/tapy_sztywne1.png";
import taping2 from "../../styles/images/tapy_sztywne2.jpg";
import favicon from "../../styles/images/favicon.ico";
import { ListSection } from "../../components/listSection";

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Taping sztywny - Centrum Rehabilitacji Bartosz Burzyński</title>
        <meta name="description" content="Proponujemy fizjoterapię, którą przeprowadzamy w profesjonalnym gabinecie oraz w domu pacjenta. Terapia prowadzona jest przez wyspecjalizowanych fizjoterapeutów każdorazowo ma ona charakter kompleksowy oraz indywidualny." />
        <link rel="icon" href={favicon} />
        <meta name="theme-color" content="#0089b9"/>
      </Helmet>

      <Header
        activePage="nasze-metody"
      />
      <div className="page_title">
        <div className="container">
          <div className="title"><h1>Taping sztywny</h1></div>
        </div>
      </div>

      <div className="container">
        <div className="content_fullwidth">

          <div className="one_third">
            <p style={{ textAlign: "justify" }}><strong>Metoda leczenia</strong> poprzez aplikację na ciele, w ściśle określony sposób, nierozciągliwego lub elastycznego plastra. Nalepiony plaster jest źródłem bodźców wyłącznie mechanicznych (nie jest nasączony żadnym lekiem) i w zależności od rodzaju, sposobu i miejsca aplikacji, ma różnorakie oddziaływanie. Szczególnie Taping Sztywny znajduje zastosowanie w fizjoterapii przeciwbólowej, ortopedycznej, sportowej i neurologicznej.</p>
          </div>

          <div className="one_third">
            <img className="image_left1" src={taping1} alt="" width="275" height="183" />
          </div>

          <div className="one_third last">
            <img className="image_left1" src={taping2} alt="" width="275" height="275" />
          </div>
        
          <div className="clearfix">&nbsp;</div>
          <p>&nbsp;</p>

          <div className="one_half">
            <ListSection
              title="Kiedy stosować?"
              listItems={[
                " po skręceniu, zwichnieciu, niestabilności,",
                " zamiast stabilizatora, czy ortezy (szyny),",
                " jako element zmieniający kierunek działania siły mięśnia,",
                " \"kolana skoczka\",",
                " \"łokcia tenisisty\", \"łokieć golfisty\",",
                " wokół nadgarstka, kostki, stawu skokowego, stopy,",
                " drobne stawy (np. stawy palców ręki - często widoczne na meczach)."
              ]}
            />
          </div>

          <div className="one_half last">
            <ListSection
              title="Jakie są rezultaty?"
              listItems={[
                " stabilizacja z zapewnieniem kontrolowanego ruchu,",
                " ochrona,",
                " odciążenie zajętych struktur."
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