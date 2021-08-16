import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import ReactTypingEffect from 'react-typing-effect';
// import { Link, Element } from 'react-scroll';
import BackgroundText from './BackgroundText';
import BackgroundAnimation from './BackgroundAnimation';
import Page from './Page';
import Path from './Path';

const App = () => {
  const [step, setStep] = useState(0);
  const [ticker, setTicker] = useState(false);
  const tickerDelay = 2000;
  let touchStart;

  useEffect(() => {
    const ticketId = setTimeout(() => {
      setTicker(true);
    }, tickerDelay);

    return () => {
      clearTimeout(ticketId);
    }
  }, [ticker]);

  // mobile devices
  const wrapperOnTouchStart = (e) => {
    touchStart = e.touches[0].clientY;
  }
  const wrapperOnTouchMove = (e) => {
    let touchEnd = e.changedTouches[0].clientY;
    setPath(touchEnd, touchStart);
  }

  // desktops
  const wrapperOnWheel = (e) => {
    setPath(e.nativeEvent.wheelDelta);
  }

  const setPath = (startY, endY) => {
    if (!ticker === true) { return }
    if (startY > (endY || 0)) {
      if (step !== 0) {
        setStep(step - 1);
        setTicker(false);
      }
    } else {
      if (step <= 3) {
        setStep(step + 1);
        setTicker(false);
      }
    }
  }

  return (
    <div className={`ele__view-overflow-wrapper`}>

      <div
        className={`ele__view-interior-wrapper ${step > 0 ? 'frame-zoom' : ''} vh-100`}
        onTouchStart={wrapperOnTouchStart}
        onTouchMove={wrapperOnTouchMove}
        onWheel={wrapperOnWheel}
      >
        <div className={`d-flex h-100 w-100`}>
          <div className={`bg__text-wrapper`}>
            {
              step === 0
                ? <BackgroundText setStep={setStep} />
                : false
            }
          </div>
          <div className={`page`}>
            <Page step={step} />
          </div>
          <BackgroundAnimation step={step} />
        </div>
        <Path step={step} />
      </div>

    </div>
  )
};

export default App;