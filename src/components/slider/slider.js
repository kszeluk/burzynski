import React from "react";
import { AutoSizer } from "react-virtualized";
import classNames from "classnames";


import { TeamSlide } from "./teamslide";
import { GabinetSlide } from "./gabinetslide";
import { MySlide } from "./myslide";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Slider = () => {
  const [slideNumber, setSlideNumber] = React.useState(0);
  const timeout = React.useRef(null);
  const nextSlide = (currentSlideNumber, setNextSlide = true) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    let newSlideNumber = currentSlideNumber + 1;
    if (setNextSlide) {
      if (currentSlideNumber === 2) {
        newSlideNumber = 0;
      }

      setSlideNumber(newSlideNumber);
    }
    timeout.current = setTimeout(() => nextSlide(newSlideNumber), 8000);
  }

  const prevSlide = (currentSlideNumber) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    let newSlideNumber = currentSlideNumber - 1;
    if (currentSlideNumber === 0) {
      newSlideNumber = 2;
    }

    setSlideNumber(newSlideNumber);
    timeout.current = setTimeout(() => nextSlide(newSlideNumber), 8000);
  }

  React.useEffect(() => {
    nextSlide(0, false);

    return () => {
      clearTimeout(timeout.current);
    }
  }, []);


  return (
    <AutoSizer>
      {({ width }) => {
        if (width === 0 || width < 0) {
          return (
            <div style={{
              width: "100vw",
              height: "43vw",
              maxHeight: "500px",
              backgroundColor: "#f1f2f4",
              float: "left"
            }} />
          );
        }

        const height = Math.min(500, 0.43 * width);

        return (
          <div 
            style={{ width, height }}
            className={classNames("slider-container", `slide${slideNumber}`)}
          >
            <CSSTransition
              classNames="slide"
              in={slideNumber === 0}
              timeout={600}
              unmountOnExit={true}
            >
              <TeamSlide
                width={width}
                height={height}
                isActive={slideNumber === 0}
              />
            </CSSTransition>
            <CSSTransition
              classNames="slide"
              in={slideNumber === 1}
              timeout={600}
              unmountOnExit={true}
            >
              <GabinetSlide
                width={width}
                height={height}
                isActive={slideNumber === 1}
              />
            </CSSTransition>
            <CSSTransition
              classNames="slide"
              in={slideNumber === 2}
              timeout={600}
              unmountOnExit={true}
            >
              <MySlide
                width={width}
                height={height}          
                isActive={slideNumber === 2}
              />
            </CSSTransition>
            <button
              style={{
                position: "absolute",
                top: `${height/2}px`,
                marginTop: "-23px",
                left: "0px",
                border: "none"
              }}
              className="tp-leftarrow tparrows default"
              onClick={() => nextSlide(slideNumber)}
            />
            <button
              style={{
                position: "absolute",
                top: `${height/2}px`,
                marginTop: "-23px",
                right: "0px",
                border: "none"
              }}
              className="tp-rightarrow tparrows default"
              onClick={() => prevSlide(slideNumber)}
            />
        </div>
      )}}
    </AutoSizer>
  )
}