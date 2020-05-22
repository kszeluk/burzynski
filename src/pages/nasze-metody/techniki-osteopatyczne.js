import React from "react";
import { Helmet } from "react-helmet";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ScrollToTop } from "../../components/scrolltotop";
import { CookiesBanner } from "../../components/cookies";

import techniki from "../../styles/images/techniki1.jpg";
import favicon from "../../styles/images/favicon.ico";
import { ListSection } from "../../components/listSection";

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Techniki osteopatyczne - Centrum Rehabilitacji Bartosz Burzyński</title>
        <link rel="icon" href={favicon} />
        <meta name="theme-color" content="#0089b9"/>
      </Helmet>
      <Header
        activePage="nasze-metody"
      />
      <div className="page_title">
        <div className="container">
          <div className="title"><h1>Techniki osteopatyczne</h1></div>
        </div>
      </div>

      <div className="container">
        <div className="content_fullwidth">
          <div className="two_third">
            <p><strong>Osteopatia</strong> jest metodą, w której badanie manualne wykorzystywane jest do stawiania diagnozy i leczenia chorych. Osteopatia uznaje i akceptuje zależność pomiędzy ciałem, psychiką i umysłem zarówno w stanie określanym jako zdrowie jak i w stanie chorobowym. Traktuje ona ciało ludzkie jako całość zarówno w aspekcie strukturalnym jak i funkcjonalnym.</p>
            <p>&nbsp;</p>
            <p><strong>Osteopatia</strong> w przeciwieństwie do medycyny klasycznej (akademickiej) <strong>nie korzysta z leków</strong>. Nie jest ona jednak dla medycyny klasycznej konkurencją, a wręcz przeciwnie - stanowi doskonałe uzupełnienie.</p>
          </div>
          <div className="image_left1">
            &nbsp;
            <img className="image_left1" src={techniki} alt="" width="275" height="182" />
          </div>
          <div className="clearfix">&nbsp;</div>
          <p>&nbsp;</p>
          
          <div className="big_text1">GŁÓWNE KIERUNKI OSTEOPATII</div>
          <h3>Osteopatia narządu ruchu</h3>
          <p>Polega na dokładnym badaniu ortopedycznym, neurologicznym i osteopatycznym. Połączenie takiego badania z palpacją pozwalają skutecznie określić miejsca dysfunkcji.</p>
          <p>&nbsp;</p>
          <div className="one_half">
            <ListSection
              title="Techniki:"
              listItems={[
                " manipulacje stawowe,",
                " techniki relaksacji powięziowo – mięśniowej,",
                " stymulacja punktów spustowych,",
                " neuromobilizacje."
              ]}
            />
          </div>
          <div className="one_half last">
            <ListSection
              title="Wskazania:"
              listItems={[
                " zespoły bólowe kręgosłupa,",
                " bóle korzeniowe (rwa kulszowa, rwa udowa, rwa ramienna),",
                " bóle i zawroty głowy pochodzenia szyjnego,",
                " bóle i zaburzenia ruchomości stawów obwodowych."
              ]}
            />
          </div>

          <div className="clearfix divider_line3">&nbsp;</div>

          <div className="big_text1">
            <h3>Osteopatia czaszkowo – krzyżowa</h3>
            <p>Polega na bardzo subtelnej palpacji oraz zastosowaniu wyspecjalizowanych technik mających na celu neutralizację napięć. Poprzez pracę na kościach czaszki dochodzi do oddziaływania na struktury membranowe znajdujące się w jej wnętrzu a w konsekwencji do przywrócenia równowagi w dalszych strukturach.</p>
            <p>&nbsp;</p>
          </div>

          <div className="one_half">
            <ListSection
              title="Wskazania:"
              listItems={[
                " przewlekłe bóle głowy,",
                " zawroty głowy,",
                " przewlekłe stany napięciowe i depresyjne,",
                " chroniczny stan zapalny zatok, uszu,",
                " problemy ze stawem skroniowo- żuchwowym,",
                " problemów ze wzrokiem, słuchem, mową."
              ]}
            />
          </div>
          <div className="one_half last">&nbsp;</div>

          <div className="clearfix">&nbsp;</div>
          <div className="clearfix divider_line3">&nbsp;</div>
          <div className="big_text1">
            <h3>Osteopatia narządów wewnętrznych</h3>
            <p>Celem osteopatii wisceralnej jest przywrócenie prawidłowego napięcia, elastyczności i ruchomości narządów wewnętrznych. Praca poprzez system narządów wewnętrznych który posiada swoje liczne anatomiczne i funkcjonalne połączenia z innymi strukturami znajdującymi się w ciele człowieka pozwala na skuteczne usuwanie blokad prowadzących, lub podtrzymujących stan patologiczny.</p>
            <p>&nbsp;</p>
          </div>

          <div className="one_half">
            <ListSection
              title="Wskazania:"
              listItems={[
                " bóle brzucha, klatki piersiowej,",
                " problemy z nietrzymaniem moczu,",
                " bolesne miesiączki,",
                " niemechaniczne bóle kręgosłupa,",
                " zrosty,",
                " refluks żołądka,",
                " zespół jelita wrażliwego, nerwice żołądka"
              ]}
            />
          </div>
          <div className="one_half last">&nbsp;</div>
          <div className="clearfix">&nbsp;</div>
          <div className="clearfix divider_line3">&nbsp;</div>

          <div className="big_text1">
            <p><strong>Każda sesja</strong> terapeutyczna łączy w sobie pracę strukturalną, narządów wewnętrznych oraz czaszkowo – krzyżową w różnych proporcjach w zależności od potrzeb Pacjenta. Osteopatia traktuje ludzkie ciało jako całość, dążąc do usunięcia przyczyn zaistniałych dolegliwości, współpracując przy tym ze specjalistami innych gałęzi medycznych.</p>
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