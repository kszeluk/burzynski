import React from "react";
import classNames from "classnames";
import {
  CSSTransition,
} from 'react-transition-group';

export const Header = ({ activePage }) => {
  const [methodsVisible, setMethodsVisible] = React.useState(false);

  return (
    <>
      <header id="header" className="sticky">
        <div id="trueHeader">
          <div className="wrapper">
              <div className="container">
                <div className="logo_main">
                  <a href="/" id="logo" />
                </div>
                <div className="menu_main">
                  <div className="joosa top_links">Telefon: <strong> +48 604 442 837</strong> <a href="/kontakt/" className="makeap_but">Umów wizytę</a></div>
                  <nav id="access" className="access" role="navigation">
                    <div id="menu" className="menu">
                      <ul id="tiny">
                        <li><a href="/" className={classNames({active: activePage === "home" })}>Storna główna<span></span></a></li>
                        <li><a href="/o-firmie/" className={classNames({active: activePage === "o-firmie"})}>O firmie<span></span></a></li>                    
                        <li
                          onMouseLeave={ () => setMethodsVisible(false) }                        
                          onMouseEnter={ () => setMethodsVisible(true) }
                        >
                          <a
                            href="#"
                            onClick={() => { return false; }}
                            className={classNames({ active: activePage === "nasze-metody", selected: methodsVisible })}
                          >
                            {"Nasze metody "}
                            <i className="fa fa-angle-down" />
                          </a>
                          <div className="submenu-container">
                            <CSSTransition
                              in={methodsVisible}
                              timeout={300}
                              classNames="slide"
                              unmountOnExit
                            >
                              <ul className="nav__submenu">
                                <li><a href="/nasze-metody/elektroterapia/">Elektroterapia</a></li>
                                <li><a href="/nasze-metody/ultradzwieki/">Ultradźwięki</a></li>
                                <li><a href="/nasze-metody/terapia-swiatlem/">Terapia światłem</a></li>
                                <li><a href="/nasze-metody/kinesiology-taping/">Kinesiology Taping</a></li>
                                <li><a href="/nasze-metody/taping-sztywny/">Taping sztywny</a></li>
                                <li><a href="/nasze-metody/masaz/">Masaż</a></li>
                                <li><a href="/nasze-metody/techniki-osteopatyczne/">Techniki osteopatyczne</a></li>             
                              </ul>
                            </CSSTransition>
                          </div>
                        </li>	
                        <li><a href="/oferta/" className={classNames({ active: activePage === "oferta"})}>Oferta<span></span></a></li>
                        <li><a href="/o-nas/" className={classNames({ active: activePage === "o-nas"})}>O nas<span></span></a></li>
                        <li><a href="/nasze-oddzialy/" className={classNames({ active: activePage === "nasze-oddzialy"})}>Nasze Oddziały<span></span></a></li>
                        <li><a href="/kontakt/" className={classNames({ active: activePage === "kontakt"})}>Kontakt<span></span></a></li>
                      </ul>
                      <select className="selectnav" id="selectnav1" onChange={(event) => {
                        window.location = event.target.value;
                      }}>
                        <option value="">--- Navigation --- </option>
                        <option value="/" selected="">STORNA GŁÓWNA</option>
                        <option value="/o-firmie/">O FIRMIE</option>
                        <option value="/#">NASZE METODY</option>
                        <option value="/nasze-metody/elektroterapia/">- Elektroterapia</option>
                        <option value="/nasze-metody/ultradzwieki/">- Ultradźwięki</option>
                        <option value="/nasze-metody/terapia-swiatlem/">- Terapia światłem</option>
                        <option value="/nasze-metody/kinesiology-taping/">- Kinesiology Taping</option>
                        <option value="/nasze-metody/taping-sztywny/">- Taping sztywny</option>
                        <option value="/nasze-metody/masaz/">- Masaż</option>
                        <option value="/nasze-metody/techniki-osteopatyczne/">- Techniki osteopatyczne</option>
                        <option value="/oferta/">OFERTA</option>
                        <option value="/o-nas/">O NAS</option>
                        <option value="/nasze-oddzialy/">NASZE ODDZIAŁY</option>
                        <option value="/kontakt/">KONTAKT</option>
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