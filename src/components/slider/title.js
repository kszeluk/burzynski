import React from "react";

const countLeft = (width) => {
  const left = (width - 1170)/2;
  return Math.max(left, 10);
}

export const SliderTitle = ({ width, height, children }) => {
  const titleFontSize = Math.min(55, width * 0.046846847);

  return (
    <div
      class="tp-caption large_bold_white customin ltl start" 
      style={{
        position: "absolute",
        zIndex: 14,
        transition: "all 0s ease 0s",
        minHeight: "0px",
        minWidth: "0px",
        whiteSpace: "nowrap",
        lineHeight: `${titleFontSize}px`,
        borderWidth: "0px",
        margin: "0px",
        padding: "0px",
        fontSize: `${titleFontSize}px`,
        visibility: "visible",
        opacity: "1",
        top: `${Math.min(170, height * 0.338785047)}px`,
        left: `${countLeft(width)}px`,
        transform: "none",
        transformOrigin: "50% 0% 0px"
      }}
    >
      { children }
    </div>
  );
}