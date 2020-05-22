import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ListSection } from "../components/listSection";
import { ScrollToTop } from "../components/scrolltotop";
import { CookiesBanner } from "../components/cookies";

export default () => {
  return (
    <>
      <Header
        activePage="o-nas"
      />
      <div className="page_title">
        <div className="container">
          <div className="title"><h1>Oferta</h1></div>
        </div>
      </div>

      <div className="container">
        <div className="content_fullwidth">
          <div className="two_third">
            <img className="image_left1" src="http://www.rehabilitacjaburzynski.pl/images/upload/FB1.jpg" alt="" width="204" height="306" /><br />
            <h2>Mgr <strong>Bartosz Burzyński</strong></h2>
            <p style={{ textAlign: "justify" }}>Ukończyłem 5-cio letnie studia magisterskie na Wydziale Fizjoterapii Akademii Wychowania Fizycznego we Wrocławiu ze specjalizacją z Psychomotoryki. Stale rozwijam swoje umiejętności manualne uczestnicząc w licznych, ciekawych kursach. Uwielbiam pracować z Pacjentami z problemami: ze stawem krzyżowo-biodrowym (szczególnie! ☺ ), z przepuklinami kręgosłupa oraz z problemami stawów obwodowych (kolana, barki i stawy skokowe).</p>
            <p style={{ textAlign: "justify" }}>&nbsp;</p>
            <p style={{ textAlign: "justify" }}>Połączenie ruchu wynikającego z pracy mięśni oraz doskonalenie ciała jest nieodzownym elementem utrzymania harmonii ciała z otoczeniem. Bardzo zachęcam wszystkich Pacjentów do profilaktyki. Każdy mały, zdrowy nawyk który włączymy do swojej codzienności dziś, zaprocentuje i zaowocuje z wielką siłą po latach. Połączenie fizjoterapii ze sportem jest moją pasją, którą w miarę postępującego czasu rozwijam.</p>
            <br />
            <div className="punchline_text_box">
              <div className="left"><strong>„Ruch jest w stanie zastąpić prawie każdy lek, ale wszystkie leki razem wzięte nie zastąpią ruchu" </strong></div>
              <div className="left">(Wojciech Oczko, lekarz)</div>
            </div>
          </div>
        
          <div className="one_third last">
            <ListSection
              title="Specjalistyczne kursy"
              strong={true}
              listItems={[
                (
                  <>
                    {" – Strukturelle Osteopathie und Sanfte Chiropraktik"}
                    <li>(dr Jarosław Jasięga)</li>
                  </>
                ), (
                  <>
                    {" – FDM Ortho Sport, Terapia manualna wg Typaldosa"}
                    <li>(Robert Faryj, IFDMO)</li>
                  </>
                ), (
                  <>
                    {" – FDM Cranio, Terapia manualna wg Typaldosa"}
                    <li>(Piotr Kostrzębski)</li>
                  </>
                ), (
                  <>
                    {" – Manipulacje Krótkodźwigniowe HVLA"}
                    <li>(Tim Daelamans, D.O. BSc. Msc. Ost. Msc. PT)</li>
                  </>
                ), (
                  <>
                    {" – Terapia wisceralna w praktyce fizjoterapeuty"}
                    <li>(Marcin Brzozowski, Ost)</li>
                  </>
                ), (
                  <>
                    {" – Osteopatia i chiropraktyka moduł I, moduł II, moduł III"}
                    <li>(Jakub Modliszewski, Patryk Wiśniewski)</li>
                  </>
                ), (
                  <>
                    {" – Fascial Distortion Model Moduł I – leczenie zaburzeń układu mięśniowo-szkieletowego technikami powięziowymi"}
                    <li>(Stefan Anker, Msc, PT, DO)</li>
                  </>
                ), (
                  <>
                    {" – Fascial Distortion Model Moduł II – leczenie zaburzeń układu mięśniowo-szkieletowego technikami powięziowymi"}
                    <li>(Stefan Anker, Msc, PT, DO)</li>
                  </>
                ), (
                  <>
                    {" – Fascial Distortion Model Moduł III – leczenie zaburzeń układu mięśniowo-szkieletowego technikami powięziowymi"}
                    <li>(Stefan Anker, Msc, PT, DO)</li>
                  </>
                ), (
                  <>
                    {" – Ortopedia i traumatologia sportowa – podejście fizjoterapeutyczne i osteopatyczne"}
                    <li>(Marcin Romanowski)</li>
                  </>
                ), (
                  <>
                    {" – Taping w sporcie i rehabilitacji z elementami terapii FDM"}
                    <li>(Robert Faryj, IFDMO)</li>
                  </>
                )
              ]}
              listStrongItems={[
                "2019",
                "2019",
                "2019",
                "2019",
                "2019",
                "2019",
                "2017",
                "2017",
                "2017",
                "2014",
                "2014"
              ]}
              bottomString={(
                <>
                  <p style={{textAlign: "left"}}>&nbsp;</p><p style={{textAlign: "left"}}>2009-2014 - Akademia Wychowania Fizycznego we Wrocławiu Ustudia magisterskie)</p>
                  <p style={{textAlign: "left"}}>Specjalizacja Psychomotoryka</p>
                  <p style={{textAlign: "left"}}>&nbsp;</p>
                </>
              )}
            />
            <ListSection
              title="Konferencje"
              listItems={[
                "Międzynarodowe Dni Fizjoterapii – Fizjoterapia, terapia zajęciowa, kosmetologia – razem, czy osobno?"
              ]}
            />
          </div>
        </div>

        <p>&nbsp;</p>

        <div class="two_third">
          <img class="image_left1" src="http://www.rehabilitacjaburzynski.pl/images/upload/o-nas/275_lila.jpg" alt="" width="206" height="275" />
          <h2>Mgr <strong>Lilianna Jaworska</strong></h2>
          <p style={{textAlign: "justify" }}>Jako fizjoterapeuta zwykłam patrzeć na Pacjenta holistycznie. Nie koncentruje się jedynie nad jego zauważalną dysfunkcją ale szukam pierwotnej przyczyny jej wystąpienia. Jestem doktorantką na Wydziale Fizjoterapii Akademii Wychowania Fizycznego we Wrocławiu, studentką Akademii Osteopatii w Poznaniu. Ukończyłam 2-letni kurs specjalizacyjny z Psychomotoryki.</p>
          <p style={{textAlign: "justify" }}>Niezmiernie ważne jest dla mnie sprzężenie zwrotne pomiędzy skutkami psychogennymi a zaburzeniami czynnościowymi narządu ruchu. Jedność ciała i umysłu po raz pierwszy poddałam badaniom naukowym podczas obrony pracy magisterskiej.</p>
          <p style={{textAlign: "justify" }}>Łączenie pracy z ciałem z psychoterapią było zawsze moją pasją. Możliwość łączenia pasji z rozwojem kariery naukowej oraz pracą jest moim największym celem. Nigdy się nie poddaje, uważam że w życiu najważniejsza jest cierpliwość. Moim stylem życia jest aktywność fizyczna, dobre jedzenie, pochłaniająca lektura i pasjonujące podróże.</p>
          <br />
          <div class="punchline_text_box">
          <div class="left"><strong>Bądź zmianą którą chcesz widzieć w świecie.</strong></div>
          </div>
        </div>

        <div className="one_third last">
          <ListSection
            title="Specjalistyczne kursy"
            listItems={[
              " 5-cio letnie szkolenie z zakresu medycyny osteopatycznej, Akademia Osteopatii Poznań",
              " 2-letnia specjalizacja z Psychomotoryki, Akademia Wychowania Fizycznego Wrocław",
              " Kinesiology Taping, MkMedica Wrocław",
            ]}
          />
          <ListSection
            title="Szkolenia"
            listItems={[
              " powięź w ujęciu osteopatycznym",
              " dyskopatia a dysfunkcje narządów wewnętrznych - osteopatyczne spojrzenie na zaburzenia wisceralne w problemach bólowych kręgosłupa",
              " Staw skroniowo - żuchwowy w praktyce osteopaty"
            ]}
          />
          <ListSection
            title="Konferencje"
            listItems={[
              " III Międzynarodowa Konferencja Naukowa – Filozoficzne, kulturowe i biologiczne aspekty cielesności. Świadomość ciała w teorii i praktyce",
              " Międzynarodowe Dni Fizjoterapii – Fizjoterapia, terapia zajęciowa, kosmetologia – razem, czy osobno?",
              " Uczelniana Konferencja Studenckich Kół Naukowych"
            ]}
          />
        </div>

        <p>&nbsp;</p>
        <div class="two_third">&nbsp;</div>
      </div>
      <div class="clearfix mar_top5"></div>
      <Footer />
      <ScrollToTop />
      <CookiesBanner />
    </>
  )
}