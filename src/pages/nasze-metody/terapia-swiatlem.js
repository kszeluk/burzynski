import React from "react";

import { ListSection } from "../../components/listSection";
import { PageTemplate } from "../../components/pageTemplate";

import swiatlo1 from "../../styles/images/wiatoterapia1.png";
import swiatlo2 from "../../styles/images/wiatoterapia_2.jpg";


export default () => {
  return (
    <PageTemplate
      title="Terapia światłem"
      pageTitle="Terapia światłem"
      activePage="nasze-metody"
    >
      <div className="container">
        <div className="content_fullwidth">

          <div className="one_third">
            <h2>Lampa Biotron MedAll</h2>
            <p style={{ textAlign: "justify" }}>Lampa Bioptron dostarcza do naszego organizmu dawkę dziennego zapotrzebowania na światło, które jest niezbędne do jego prawidłowego funkcjonowania. Efekt terapii nie obejmuje jedynie obszaru naświetlanej skóry, ale i cały organizm.</p>
          </div>

          <div className="one_third">
            <img className="image_left1" src={swiatlo1} alt="" width="275" height="275" />
          </div>

          <div className="one_third last">
            <img className="image_left1" src={swiatlo2} alt="" width="275" height="182" />
          </div>
        
          <div className="clearfix">&nbsp;</div>
          <p>&nbsp;</p>

          <div className="one_third">
            <ListSection
              title="Kiedy stosować?"
              listItems={[
                " Przewlekłe procesy zapalne i reumatyczne stawów",
                " Stany pourazowe kończyn",
                " Przewlekłe stany zapalne jamy nosowej, zatok przynosowych, ucha zewnętrznego i stawów żuchwy",
                " Przewlekłe i podostre stany zapalne nerwów obwodowych",
                " Mięśniobóle",
                " Przykurcze",
                " Trudno gojące się rany",
                " Trądzik różowaty, trądzik młodzieńczy",
                " Przygotowanie do masażu, kinezyterapii i zabiegów z zastosowaniem prądu"
              ]}
            />
          </div>

          <div className="one_third">
            <ListSection
              title="Jakie są rezultaty?"
              listItems={[
                " Rozszerzenie naczyń włosowatych skóry",
                " Zwiększenie przepływu krwi tętniczej",
                " Reakcje ze strony naczyń głębiej położonych",
                " Zmniejszenie napięcia mięśni",
                " Działanie przeciwbólowe",
                " Zwiększenie przemiany materii",
                " Pobudzenie receptorów cieplnych skóry"
              ]}
            />
          </div>

          <div className="one_third last">
            <ListSection
              title="Kiedy nie stosować?"
              listItems={[
                " Czynna gruźlica płuc",
                " Ciąża",
                " Zaawansowana miażdżyca naczyń krwionośnych oraz niewydolność krążenia",
                " Nowotwory",
                " Zakrzepowe zapalenie żył",
                " Ostre stany zapalne"                
              ]}
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}