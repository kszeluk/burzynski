import React from "react";

const countLeft = (width) => {
  const left = (width - 1170)/2;
  return Math.max(left, 10);
};

export const SliderSubTitle = ({ width, height, children }) => {
  return (
    <div
      className="tp-caption mediumlarge_light_white skewfromleft customout start"
      style={{
        position: "absolute",
        zIndex: 6,
        transition: "all 0s ease 0s",
        minHeight: "0px",
        minWidth: "0px",
        whiteSpace: "nowrap",
        lineHeight: `${Math.min(27, width * 0.022624434)}px`,
        borderWidth: "0px",
        margin: "0px",
        padding: "0px",
        fontSize: `${Math.min(27, width * 0.022624434)}px`,
        visibility: "visible",
        opacity: 1,
        top: `${Math.min(125, height * 0.248868778)}px`,
        left: `${countLeft(width)}px`,
        transform: "none",
        transformOrigin: "50% 50% 0px;"
      }}
    >
      { children }
    </div>
  );
}