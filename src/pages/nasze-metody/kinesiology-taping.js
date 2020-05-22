import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ScrollToTop } from "../../components/scrolltotop";
import { CookiesBanner } from "../../components/cookies";

import swiatlo1 from "../../styles/images/kinesiology_taping_3.jpg";
import swiatlo2 from "../../styles/images/kinesiology_taping_1.png";
import { ListSection } from "../../components/listSection";


export default () => {
  return (
    <>
      <Header
        activePage="nasze-metody"
      />
      <div className="page_title">
        <div className="container">
          <div className="title"><h1>Kinesiology Taping</h1></div>
        </div>
      </div>

      <div className="container">
        <div className="content_fullwidth">

          <div className="one_third">
            <h2>O zabiegu.</h2>
            <p>Kinesiology Taping jest metodą terapii, którą powszechnie stosuje się w wielu dziedzinach medycyny, mianowicie w ortopedii, traumatologii, neurologii, onkologii, chirurgii ogólnej i plastycznej oraz w medycynie sportowej. Metoda ta ma wpływ na zmniejszenie napięcia mięśni oraz ścięgien.</p>
          </div>

          <div className="one_third">
            <img className="image_left1" src={swiatlo1} alt="" width="275" height="183" />
          </div>

          <div className="one_third last">
            <img className="image_left1" src={swiatlo2} alt="" width="236" height="212" />
          </div>
        
          <div className="clearfix">&nbsp;</div>
          <p>&nbsp;</p>

          <div className="one_third">
            <ListSection
              title="Kiedy stosować?"
              listItems={[
                " Przewlekłe wzmożone napięcie mięśniowe",
                " Zespoły bólowe mięśniowe, stawów i kręgosłupa, bóle krzyża",
                " Wady postawy",
                " Zespół ciasnoty podbarkowej",
                " Paluch koślawy",
                " Zespół łokcia tenisisty oraz golfisty",
                " Ostroga piętowa",
                " Stłuczenia, pęknięcia złamania żeber",
                " Dolegliwości ze strony ścięgna Achillesa",
                " Zapalenie pochewek ścięgnistych",
                " Opadająca stopa",
                " Obrzęk",
                " Niestabilność stawów",
                " Poprawa stabilizacji i koordynacji",
                " Stan po skręceniach i zwichnięciach stawów",
                " Stany po urazach i operacjach mięśni oraz więzadeł",
                " Blizny",
                " Krwiaki pourazowe",
                " Porażenie nerwu twarzowego"
              ]}
            />
          </div>

          <div className="one_third">
            <ListSection
              title="Jakie są rezultaty?"
              listItems={[
                " jest dobrze akceptowany przez pacjentów,",
                " działa zgodnie z funkcjonowaniem organizmu przez 24 godziny na dobę, a nie tylko podczas sesji terapeutycznej,",
                " efekt poprawy jest zauważalny bezpośrednio po aplikacji i utrzymuje się po jej usunięciu,",
                " nie wyklucza stosowania innych form terapii"
              ]}
            />
          </div>

          <div className="one_third last">
            <ListSection
              title="Kiedy nie stosować zabiegu?"
              listItems={[
                " Zaawansowana miażdżyca naczyń krwionośnych oraz niewydolność krążenia",
                " Stany zapalne skóry"
              ]}
            />
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