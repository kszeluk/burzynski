import React from "react";

import { SliderTitle } from "./title";
import { SliderSubTitle } from "./subtitle";
import { SliderText } from "./slidertext";
import { SliderButtons } from "./sliderbuttons";

export const MySlide = ({ width, height, isActive }) => {
  return (
    <div className="slide-container slide-2">
      <div>
        <div>
          <SliderSubTitle
            width={width}
            height={height}
          >
            <>
              Zespół <strong>wykwalifikowanych</strong>
            </>
          </SliderSubTitle>
          <SliderTitle
            width={width}
            height={height}
          >
            <strong>fizjoterapeutów</strong>
          </SliderTitle>

          <SliderText
            width={width}
            height={height}
          >
            Cały czas poszerzamy swoje kwalifikacje <br /> poprzez specjalistyczne kursy doskonalące.
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
              url: "/o-nas/",
              content: (
                <>
                  <i class="fa fa-location-arrow"></i>&nbsp; O nas
                </>
              )
            }}
          />
        </div>
      </div>
    </div>
  );
}