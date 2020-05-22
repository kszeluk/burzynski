import React from "react"
import { Helmet } from "react-helmet";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Slider } from "../components/slider/slider";
import { ScrollToTop } from "../components/scrolltotop";
import { CookiesBanner } from "../components/cookies";

import elektroterapia from "../styles/images/elektroterapia.jpeg";
import ultradzwieki from "../styles/images/ultradzwieki.jpeg";
import terapiaswiatlem from "../styles/images/terapia-swiatlem.jpeg";
import kinesiology from "../styles/images/kinesiology-taping.jpeg";
import taping from "../styles/images/taping-sztywny.jpeg";
import masaz from "../styles/images/masaz.jpeg";
import osteopatia from "../styles/images/techniki-osteopatyczne.jpeg";
import logo from "../styles/images/logo-centrum-rehabilitacji.jpeg";
import lila from "../styles/images/lilianna-jaworska-new.webp";
import bartek from "../styles/images/bartosz-burzynski-new.webp";
import google from "../styles/images/google.jpeg";
import facebook from "../styles/images/facebook.jpeg";
import a from "../styles/images/a.jpeg";
import cnm from "../styles/images/cnm.jpeg";
import images from "../styles/images/images.jpeg";
import favicon from "../styles/images/favicon.ico";

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Centrum Rehabilitacji Bartosz Burzyński</title>
      <meta name="description" content="Proponujemy fizjoterapię, którą przeprowadzamy w profesjonalnym gabinecie oraz w domu pacjenta. Terapia prowadzona jest przez wyspecjalizowanych fizjoterapeutów każdorazowo ma ona charakter kompleksowy oraz indywidualny." />
        <link rel="icon" href={favicon} />
      <meta name="theme-color" content="#0089b9"/>
    </Helmet>
    <Header
      activePage="home"
    />
    <div className="container_full">
      <Slider />
    </div>
    <div class="clearfix"></div>

    <div className="mar_top4"></div>
    <div className="joosa fusectio1">
      <div className="container">
        <h1>
          <i>Z czym możesz się do nas zgłosić?</i>
          Poznaj szczegóły <strong>oferty rehabilitacji</strong>
        </h1>
        <div className="one_third">
          <div className="left">
            <h4>STANY POURAZOWE</h4>
            <p></p><p>Rehabilitacja po urazach ma na celu odzyskanie sprawności sprzed wypadku.</p><p></p>
            <a href="/oferta/"><i className="fa fa-plus-square"></i>&nbsp; Więcej</a>
          </div>

          <div className="right one"></div>
        </div>
        <div className="one_third">
          <div className="left">
            <h4>BÓLE KRĘGOSŁUPA</h4>
            <p></p><p>Przeciążony kręgosłup wysyła więcej sygnałów...</p><p></p>
            <a href="/oferta/"><i className="fa fa-plus-square"></i>&nbsp; Więcej</a>
          </div>
          <div className="right two"></div>
        </div>
        <div className="one_third last">
          <div className="left">
            <h4>CHOROBY REUMATYCZNE</h4>
            <p></p><p>Objawiają się zmianami w obrębie stawów i kości, powodując ból.</p><p></p>
            <a href="/oferta/"><i className="fa fa-plus-square"></i>&nbsp; Więcej</a>
          </div>
          <div className="right three"></div>
        </div>
      </div>
    </div>

    <div className="clearfix mar_top5" />
    <div className="joosa fusectio2">
      <div className="container">
        <h1>
          <i>nowoczesne metody rehabilitacji</i> Jakie metody stosujemy?
        </h1>
        <div className="one_fourth">
          <div className="zoom_img">
            <ul>
              <li>
                <a href="/nasze-metody/elektroterapia/">
                  <div className="hide_contdiv">{"Wireless Professional jest obecnie najbardziej zaawansowanym urządzeniem do elektroterapii... więcej »"}</div>
                  <img src={elektroterapia} className="blog" alt="Elektroterapia" />
                  <h5><strong>Elektroterapia</strong></h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="one_fourth">
          <div className="zoom_img">
            <ul><li>
              <a href="/nasze-metody/ultradzwieki/">
                <div className="hide_contdiv">Aparat BTL-4710 Smart służy do terapii ultradźwiękowej. Jest wysoce ceniony wśród terapeutów... więcej »</div>
                <img src={ultradzwieki} className="blog" alt="Ultradźwięki" />
                <h5><strong>Ultradźwięki</strong></h5>
              </a>
            </li></ul>
          </div>
        </div>
        <div className="one_fourth">
          <div className="zoom_img">
            <ul><li>
              <a href="/nasze-metody/terapia-swiatlem/">
                <div className="hide_contdiv">Lampa Bioptron dostarcza do naszego organizmu dawkę dziennego zapotrzebowania na światło, które jest niezbędne do jego prawidłowego funkcjonowania... więcej »</div>
                <img src={terapiaswiatlem} className="blog" alt="Terapia światłem" />
                <h5><strong>Terapia światłem</strong></h5>
              </a>
            </li></ul>
          </div>
        </div>
            <div className="one_fourth last">
                <div className="zoom_img">
                    <ul><li>
                      <a href="/nasze-metody/kinesiology-taping/">
                        <div className="hide_contdiv">Kinesiology Taping jest metodą terapii, którą powszechnie stosuje się w wielu dziedzinach medycyny... więcej »</div>
                        <img src={kinesiology} className="blog" alt="Kinesiology taping" />
                        <h5><strong>Kinesiology taping</strong></h5>
                      </a>
                    </li></ul>
                </div>
            </div>

            <div className="clearfix mar_top2"></div>
        <div className="one_fourth">
          <div className="zoom_img">
            <ul><li>
              <a href="/nasze-metody/taping-sztywny/">
                <div className="hide_contdiv">Metoda leczenia poprzez aplikację na ciele, w ściśle określony sposób, nierozciągliwego lub elastycznego plastra... więcej »</div>
                <img src={taping} className="blog" alt="Taping sztywny" />
                <h5><strong>Taping sztywny</strong></h5>
              </a>
            </li></ul>
          </div>
        </div>
      <div className="one_fourth">
          <div className="zoom_img">
            <ul><li>
              <a href="/nasze-metody/masaz/">
                <div className="hide_contdiv">Masaż polega na odpowiednim doborze technik i chwytów, które pozwolą uzyskać pożądany efekt terapii... więcej »</div>
                <img src={masaz} className="blog" alt="Masaż" />
                <h5><strong>Masaż</strong></h5>
              </a>
            </li></ul>
          </div>
        </div>
      <div className="one_fourth">
          <div className="zoom_img">
            <ul><li>
              <a href="/nasze-metody/techniki-osteopatyczne/">
                <div className="hide_contdiv">Osteopatia jest metodą, w której badanie manualne wykorzystywane jest do stawiania diagnozy i leczenia chorych... »</div>
                <img src={osteopatia} className="blog" alt="Techniki osteopatyczne" />
                <h5><strong>Techniki osteopatyczne</strong></h5>
              </a>
            </li></ul>
          </div>
        </div>
          <div className="one_fourth last">
            <div className="zoom_img">
              <ul><li>
                <a href="/oferta/">
                  <div className="hide_contdiv">Poznaj szczegóły<br /> naszej oferty »</div>
                  <img src={logo} className="blog" alt="" />
                  <h5><strong>Oferta</strong></h5>
                </a>
              </li></ul>
            </div>
          </div>
        </div>
    </div>

    <div className="clearfix" />
    <div className="fresh_projects">
        <div className="container">

            <h1><i>poznaj nas</i>
                nasz <strong>profesjonalny</strong> zespół fizjoterapeutów
            </h1>
                <div className=" jcarousel-skin-tango"><div className="jcarousel-container jcarousel-container-horizontal" style={{position: "relative", display: "block"}}><div className="jcarousel-clip jcarousel-clip-horizontal" style={{position: "relative"}}><ul id="mycarouseltwo" className="jcarousel-list jcarousel-list-horizontal" style={{overflow: "hidden", position: "relative", top: "0px", margin: "0px", padding: "0px", left: "0px", width: "985px"}}>
                <li id="hideIt" className="jcarousel-item jcarousel-item-horizontal jcarousel-item-1 jcarousel-item-1-horizontal" jcarouselindex="1" style={{float: "left", listStyle: "none"}}></li>
                <li className="jcarousel-item jcarousel-item-horizontal jcarousel-item-2 jcarousel-item-2-horizontal" jcarouselindex="2" style={{float: "left", listStyle: "none"}}>
                    <div className="item">
                        <div className="fresh_projects_list">
                            <section className="cheapest">
                                <div className="display">
                                    <div className="small-group">
                                        <div className="small money">
                                            <img src={bartek} alt="Mgr Bartosz Burzyński" />
                                            <div className="info">
                                                <div className="title">Mgr Bartosz Burzyński <em>fizjoterapeuta</em></div>
                                                <div className="additionnal">
                                                    <p>Połączenie fizjoterapii ze sportem jest moim hobby, które w miarę postępującego czasu pragnę poszerzać.</p>
                                                    <p>&nbsp;</p><b><a href="o-nas/">Więcej &gt;</a></b>
                                                </div>
                                            </div>
                                            <div className="hover"></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </li>

                <li className="jcarousel-item jcarousel-item-horizontal jcarousel-item-3 jcarousel-item-3-horizontal" jcarouselindex="3" style={{float: "left", listStyle: "none"}}>
                    <div className="item">
                        <div className="fresh_projects_list">
                            <section className="cheapest">
                                <div className="display">
                                    <div className="small-group">
                                        <div className="small money">
                                            <img src={lila} alt="Mgr Lilianna Jaworska" />
                                            <div className="info">
                                                <div className="title">Mgr Lilianna Jaworska <em>fizjoterapeuta</em></div>
                                                <div className="additionnal">
                                                  <p>Łączenie pracy z ciałem z psychoterapią było zawsze moją pasją. Możliwość łączenia pasji z rozwojem kariery naukowej oraz pracą jest moim największym celem.</p>
                                                  <p>&nbsp;</p><b><a href="o-nas/">Więcej &gt;</a></b>
                                                </div>
                                            </div>
                                            <div className="hover"></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </li>

            </ul></div><div className="jcarousel-prev jcarousel-prev-horizontal jcarousel-prev-disabled jcarousel-prev-disabled-horizontal" disabled="disabled" style={{display: "block"}}></div><div className="jcarousel-next jcarousel-next-horizontal jcarousel-next-disabled jcarousel-next-disabled-horizontal" disabled="disabled" style={{display: "block"}}></div></div></div>

        </div>

        <div className="clearfix mar_top2"></div>

    </div>

    <div className="clearfix mar_top5"></div>
    <div className="container">
      <div className="partners">
        <h3>Partnerzy</h3>                      
          <ul>
            <li><a title="KKS Polonia Wrocław" href="http://poloniawroclaw1.futbolowo.pl/" target="_blank"><img src={images} alt="" width="120" height="120" /></a></li>
            <li><a title="Ćwiczenia na schorzenia" href="https://www.youtube.com/channel/UC2xqYwQL8foA74X0Nsf33vA" target="_blank"><img src={cnm} alt="" width="120" height="120" /></a></li>
            <li><a title="Fundacja Siwy Dym" href="http://www.siwydym.org.pl/" target="_blank"><img src={a} alt="" width="167" height="69" /></a></li>
            <li><a title="Facebook Centrum Rehabilitacji" href="https://www.facebook.com/pages/Centrum-Rehabilitacji/594940700650488?fref=ts" target="_blank"><img src={facebook} alt="" width="150" height="84" /></a></li>
            <li><a title="Google+ Centrum Rehabilitacji" href="https://plus.google.com/101629641010176846561/posts" target="_blank"><img src={google} alt="" width="150" height="102" /></a></li>
          </ul>
        </div>
      </div>

      <div className="clearfix mar_top4"></div>
      <Footer />
      <ScrollToTop />
      <CookiesBanner />
  </>
);