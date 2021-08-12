import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import ReactTypingEffect from 'react-typing-effect';
// import { Link, Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import BackgroundText from './BackgroundText';
import BackgroundAnimation from "./BackgroundAnimation";

const App = () => {
  const [step, setStep] = useState(0);
  const [ticker, setTicker] = useState(false);
  const tickerDelay = 2000;
  let touchStart;

  const runIcons = () => {
    let icons = [];

    for (let i = 0; i < 5; i++) {
      let icon = <FontAwesomeIcon
        key={`icon${i}`}
        icon={step === i ? faCircleNotch : faCircle}
        color="black"
        className={`path-icon ${step === i ? 'active' : ''}`}
      />
      icons.push(icon);
    }

    return icons;
  }

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
          <BackgroundText step={step} setStep={setStep} />
          <BackgroundAnimation step={step} />
        </div>
      </div>
      <div className={`ele__path-wrapper ${step > 0 ? 'activate' : ''}`}>
        <div className={`ele__path`}>
          {
            runIcons()
          }
        </div>
      </div>

    </div>
  )
};

export default App;