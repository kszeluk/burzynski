import React from "react";

const countLeft = (width) => {
  const left = (width - 1170)/2;
  return Math.max(left, 10);
};

export const SliderText = ({ width, height, children }) => {
  return (
    <div
      className="tp-caption medium_light_white skewfromright customout start"
      style={{
        position: "absolute",
        zIndex: 6,
        transition: "all 0s ease 0s",
        minHeight: "0px",
        minWidth: "0px",
        whiteSpace: "nowrap",
        lineHeight: `${Math.min(18, width * 0.014906832) * 1.5}px`,
        borderWidth: "0px",
        margin: "0px",
        padding: "0px",
        fontSize: `${Math.min(18, width * 0.014906832)}px`,
        visibility: "visible",
        opacity: 1,
        top: `${Math.min(245, height * 0.49010989)}px`,
        left: `${countLeft(width)}px`,
        transform: "none",
        transformOrigin: "50% 50% 0px;"
      }}
    >
      { children }
    </div>
  );
}