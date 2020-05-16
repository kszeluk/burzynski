import React from "react";

export const Header = () => {
  return (
    <>
      <header id="header" className="sticky" styles={{ height: "94px;" }}>
        <div id="trueHeader">
          <div className="wrapper">
              <div className="container">
                <div className="logo_main">
                  <a href="http://www.rehabilitacjaburzynski.pl/" id="logo" />
                </div>
                <div className="menu_main">
                  <div className="joosa top_links">Telefon: <strong> +48 604 442 837</strong> <a href="kontakt/" className="makeap_but">Umów wizytę</a></div>
                  <nav id="access" className="access" role="navigation">
                    <div id="menu" className="menu">
                      <ul id="tiny">
                        <li><a href="http://www.rehabilitacjaburzynski.pl/" className="active">Storna główna<span></span></a></li><li><a href="o-firmie/">O firmie<span></span></a></li>                    
                        <li><a href="#" onclick="return false;">Nasze metody <i className="fa fa-angle-down"></i></a>
                          <ul styles={{display: "none", top: "45px", visibility: "visible"}}>
                            <li><a href="nasze-metody/elektroterapia/">Elektroterapia</a></li>
                            <li><a href="nasze-metody/ultradzwieki/">Ultradźwięki</a></li>
                            <li><a href="nasze-metody/terapia-swiatlem/">Terapia światłem</a></li>
                            <li><a href="nasze-metody/kinesiology-taping/">Kinesiology Taping</a></li>
                            <li><a href="nasze-metody/taping-sztywny/">Taping sztywny</a></li>
                            <li><a href="nasze-metody/masaz/">Masaż</a></li>
                            <li><a href="nasze-metody/techniki-osteopatyczne/">Techniki osteopatyczne</a></li>             
                          </ul>
                        </li>	
                        <li><a href="oferta/">Oferta<span></span></a></li>
                        <li><a href="o-nas/">O nas<span></span></a></li>
                        <li><a href="nasze-oddzialy/">Nasze Oddziały<span></span></a></li>
                        <li><a href="kontakt/">Kontakt<span></span></a></li>
                      </ul>
                      <select className="selectnav" id="selectnav1">
                        <option value="">--- Navigation --- </option>
                        <option value="http://www.rehabilitacjaburzynski.pl/" selected="">STORNA GŁÓWNA</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/o-firmie/">O FIRMIE</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/#">NASZE METODY</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/nasze-metody/elektroterapia/">- Elektroterapia</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/nasze-metody/ultradzwieki/">- Ultradźwięki</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/nasze-metody/terapia-swiatlem/">- Terapia światłem</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/nasze-metody/kinesiology-taping/">- Kinesiology Taping</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/nasze-metody/taping-sztywny/">- Taping sztywny</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/nasze-metody/masaz/">- Masaż</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/nasze-metody/techniki-osteopatyczne/">- Techniki osteopatyczne</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/oferta/">OFERTA</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/o-nas/">O NAS</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/nasze-oddzialy/">NASZE ODDZIAŁY</option>
                        <option value="http://www.rehabilitacjaburzynski.pl/kontakt/">KONTAKT</option>
                      </select>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
      </header>
      <div className="clearfix mar_top13"></div>
    </>
  );
}