import React from "react";
import { Helmet } from "react-helmet";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ScrollToTop } from "../../components/scrolltotop";
import { CookiesBanner } from "../../components/cookies";

import masaz from "../../styles/images/masa_2.jpg";
import favicon from "../../styles/images/favicon.ico";

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Masaz - Centrum Rehabilitacji Bartosz Burzyński</title>
        <meta name="description" content="Proponujemy fizjoterapię, którą przeprowadzamy w profesjonalnym gabinecie oraz w domu pacjenta. Terapia prowadzona jest przez wyspecjalizowanych fizjoterapeutów każdorazowo ma ona charakter kompleksowy oraz indywidualny." />
        <link rel="icon" href={favicon} />
        <meta name="theme-color" content="#0089b9"/>
      </Helmet>
      <Header
        activePage="nasze-metody"
      />
      <div className="page_title">
        <div className="container">
          <div className="title"><h1>Masaż</h1></div>
        </div>
      </div>

      <div className="container">
        <div class="content_fullwidth">
          <div class="two_third">
            <p style={{ textAlign: "justify" }}><strong>Historia masażu</strong> sięga starożytności. Zapoczątkowany w Indiach i Chinach, stanowił naturalną metodę leczenia. Już Hipokrates wskazał na korzystne efekty zastosowanego masażu w poszczególnych jednostkach chorobowych! W XVI wieku francuski lekarz Ambroży Paré w wyniku badań nad fizjologią masażu oraz w oparciu o własne obserwacje (pozytywnych skutków masażu u chorych po operacjach) ogłosił masaż oficjalną metodą leczenia.&nbsp;</p>
          </div>
          
          <div class="one_third last">
            <img class="image_left1" src={masaz} alt="" width="275" height="139" />
          </div>
          <div class="clearfix">&nbsp;</div>
          <div class="two_third">
            <p style={{ textAlign: "justify" }}><strong>Masaż</strong> polega na odpowiednim doborze technik i chwytów, które pozwolą uzyskać pożądany efekt terapii. Wpływa on wspomagająco na pielęgnację skóry poprzez złuszczanie komórek naskórka oraz zwiększanie napięcia skóry. Poprawia również elastyczność aparatu ścięgnisto-więzadłowego, obniża napięcie psychiczne, oraz normalizuje napięcie mięśniowe. Zwiększa przepływ krwi zaopatrując tkanki w tlen oraz w substancje odżywcze. Masaż klasyczny może być stosowany prawie na każdej grupie mięśniowej.</p>
          </div>
          <div class="one_third last">&nbsp;</div>
        </div>
      </div>

      <div class="clearfix mar_top5"></div>
      <Footer />
      <ScrollToTop />
      <CookiesBanner />
    </>
  )
}