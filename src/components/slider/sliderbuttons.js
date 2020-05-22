import React from "react";

const countLeft = (width) => {
  const left = (width - 1170)/2;
  return Math.max(left, 10);
}


const getButtonSizes = (width) => {
  if (width > 1169) {
    return {
      padding: 25,
      fontSize: 18,
      space: 18
    };
  }

  if ( width > 999) {
    return {
      padding: 18,
      fontSize: 18,
      space: 18
    };
  }

  if ( width > 768 ) {
    return {
      padding: 10,
      fontSize: 14,
      space: 18
    };
  }

  if (width > 480) {
    return {
      padding: 5,
      fontSize: 10,
      space: 18
    };
  }

  return {
    padding: 2,
    fontSize: 7,
    space: 3
  };
}

export const SliderButtons = ({ width, height, button1, button2 }) => {
  const buttonSizes = getButtonSizes(width);

  return (
    <>
      <div
        class="tp-caption customin ltl start" 
        style={{
          position: "absolute",
          zIndex: 16,
          transition: "all 0s ease 0s",
          minHeight: "0px",
          minWidth: "0px",
          whiteSpace: "nowrap",
          lineHeight: "23px",
          borderWidth: "0px",
          margin: "0px",
          padding: "0px",
          visibility: "visible",
          opacity: 1,
          top: `${Math.min(340, height * 0.679120879)}px`,
          left: `${countLeft(width)}px`,
          transform: "none",
          transformOrigin: "50% 0% 0px;"
        }}
      >
        <a href={button1.url} class="button_slider">
          {button1.content}
        </a>
      </div>

      <div
        class="tp-caption customin ltl start"
        style={{
          position: "absolute",
          zIndex: 16,
          transition: "all 0s ease 0s",
          minHeight: "0px",
          minWidth: "0px",
          whiteSpace: "nowrap",
          lineHeight: "23px",
          borderWidth: "0px",
          margin: "0px",
          padding: "0px",
          visibility: "visible",
          opacity: 1,
          top: `${Math.min(340, height * 0.679120879)}px`,
          left: `${countLeft(width) + buttonSizes.padding * 2 + buttonSizes.fontSize * 8.5 + buttonSizes.space}px`,
          transform: "none",
          transformOrigin: "50% 0% 0px;"
        }}
      >
        <a href={button2.url} class="button_slider_02">
          {button2.content}
        </a>
      </div>
    </>
  );
}