import React from "react";
import { CSSTransition } from "react-transition-group";

const scrollToTop = () => {
  const c = window.scrollY;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 16);  
  }
};

export const ScrollToTop = () => {
  const [scroll, setScroll] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };
  
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <CSSTransition
      classNames="scroll-to-top-button"
      in={scroll > 150}
      timeout={100}
    >
      <button
        class="scrollup"
        onClick={scrollToTop}
      >
        Scroll
      </button>
    </CSSTransition>
  )
}