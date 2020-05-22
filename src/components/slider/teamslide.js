import React from "react";

import slide1 from "../../styles/images/slide1.png";
import { SliderTitle } from "./title";
import { SliderSubTitle } from "./subtitle";
import { SliderText } from "./slidertext";
import { SliderButtons } from "./sliderbuttons";

export const TeamSlide = ({ width, height, isActive }) => {
  return (
    <div className="slide-container slide-0">
      <div>
        <img
          src={slide1}
          alt="" width="auto" height={`${height}px`}
          style={{ position: "absolute", left: `${width * 0.4584}px`, top: "0"}}
        />
        <div>
          <SliderSubTitle
            width={width}
            height={height}
          >
            Nowoczesne

          </SliderSubTitle>
          <SliderTitle
            width={width}
            height={height}
          >
            Metody <strong>rehabilitacji</strong>
          </SliderTitle>

          <SliderText
            width={width}
            height={height}
          >
            Wysoka skuteczność terapii to dla nas priorytet. <br />Dla każdego pacjenta dobieramy odpowiednią terapię.
          </SliderText>

          <SliderButtons
            width={width}
            height={height}
            button1={{
              url: "/kontakt/",
              content: (
                <>
                  <i class="fa fa-hand-o-right" />&nbsp; Umów wizytę
                </>
              )
            }}
            button2={{
              url: "/oferta/",
              content: (
                <>
                  <i class="fa fa-location-arrow" />&nbsp; Oferta
                </>
              )
            }}
          />
        </div>
      </div>
    </div>
  );
}