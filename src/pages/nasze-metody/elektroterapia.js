import React from "react";
import { Helmet } from "react-helmet";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer"
import { ListSection } from "../../components/listSection";
import { ScrollToTop } from "../../components/scrolltotop";
import { CookiesBanner } from "../../components/cookies";

import elektroterapia2 from "../../styles/images/elektroterapia2.png";
import elektroterapia1 from "../../styles/images/elektroterapia1.png";
import favicon from "../../styles/images/favicon.ico";

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elektroterapia - Centrum Rehabilitacji Bartosz Burzyński</title>
        <link rel="icon" href={favicon} />
        <meta name="theme-color" content="#0089b9"/>
      </Helmet>
      <Header
        activePage="nasze-metody"
      />

      <div className="page_title">
        <div className="container">
          <div className="title"><h1>Elektroterapia</h1></div>
        </div>
      </div>

      <div className="container">
        <div className="content_fullwidth">
          <h3><strong>Z PIERWSZYM NA SWIECIE BEZPRZEWODOWYM APARATEM DO ELEKTROTERAPII</strong></h3>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div className="two_third">
            <h3>O urządzeniu</h3>
            <p style={{ textAlign: "justify" }}><strong>Wireless Professional</strong> jest obecnie najbardziej zaawansowanym urządzeniem do elektroterapii, oferującym zwiększoną łatwość użytkowania i wygodę, jednocześnie oszczędzając czas i przestrzeń w celu optymalizacji leczenia pacjentów. Wprowadzając unikalny Mi-Technology™ do profesjonalnych programów stał się obecnie najlepszym poznanym na rynku urządzeniem do rehabilitacji funkcjonalnej. Urządzenie pozwala na prace w gabinecie, terenie i u pacjenta. Umożliwia rehabilitacje i elektrostymulacje mięśni podczas wykonywania ćwiczeń co znacząco podnosi efekty terapii. Jest doskonałym sposobem skutecznej walki z bólem przewlekłym i ostrym. Posiada certyfikat bezpieczeństwa wydany przez dystrybutora.</p>
          </div>
          <div className="one_third last"><img className="image_left1" src={elektroterapia2} alt="" width="275" height="275" />&nbsp;</div>
          <div className="two_third">
            <h3>O zabiegu</h3>
            <p style={{ textAlign: "justify" }}>Podczas terapii wykorzystuje się do leczenia prąd stały, modulowane prądy średniej częstotliwości oraz prądy impulsowe małej i średniej częstotliwości. Rodzaj prądu i jego dawka jest dobierana w zależności od leczonego schorzenia, a także wrażliwości pacjenta.</p>
          </div>
          <div className="one_third last"><img className="image_left1" src={elektroterapia1} alt="" width="275" height="275" /></div>
            <div className="clearfix">&nbsp;</div>
            <p>&nbsp;</p>
            <div className="one_third">
              <ListSection
                title="Kiedy stosować zabieg?"
                listItems={[
                  " Zespoły bólowe kręgosłupa",
                  " Dyskopatie",
                  " Nerwobóle, choroby układu nerwowego",
                  " Choroba zwyrodnieniowa stawów, choroby reumatyczne",
                  " Stany pourazowe",
                  " Zaniki mięśni",
                  " Porażenie obwodowego nerwu twarzowego",
                  " Obrzęki"
                ]}
              />
            </div>
            <div className="one_third">
              <ListSection
                title="Jakie są rezultaty zabiegu?"
                listItems={[
                  " Przeciwbólowe",
                  " Zmniejszanie napięcia mięśniowego",
                  " Wzmaganie aktywności naczyniowej",
                  " Stymulacje mięśniowe",
                  " Rozszerzanie naczyń krwionośnych i poprawa ukrwienia",
                  " Wpływ na przewodnictwo nerwowe"
                ]}
              />
            </div>
            <div className="one_third last">
              <ListSection
                  title="Kiedy nie stosować zabiegu?"
                  listItems={[
                    " Wszczepione urządzenia elektroniczne np. rozrusznik serca, implanty",
                    " Ostre zapalenia w okolicy stosowania zabiegu",
                    " Ropne zmiany skórne",
                    " Nowotwory"
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