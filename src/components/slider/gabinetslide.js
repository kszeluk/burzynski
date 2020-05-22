import React from "react";

import { SliderTitle } from "./title";
import { SliderText } from "./slidertext";
import { SliderButtons } from "./sliderbuttons";

export const GabinetSlide = ({ width, height, isActive }) => {
  return (
    <div className="slide-container slide-1" >
      <div>
        <div>
          <SliderTitle
            width={width}
            height={height}
          >
            Profesjonalny <strong>gabinet</strong>
          </SliderTitle>

          <SliderText
            width={width}
            height={height}
          >
            Proponujemy fizjoterapię, którą przeprowadzamy <br /> w profesjonalnym gabinecie oraz w domu pacjenta.
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
              url: "/o-firmie/",
              content: (
                <>
                  <i class="fa fa-location-arrow"></i>&nbsp; O firmie
                </>
              )
            }}
          />
        </div>
      </div>
    </div>
  );
};