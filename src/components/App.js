import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import ReactTypingEffect from 'react-typing-effect';
// import { Link, Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [step, setStep] = useState(0);
  const [ticker, setTicker] = useState(false);
  const tickerDelay = 2000;
  let touchStart;

  const setBlockTransition = (step) => {
    // const evenOrOdd = (step % 2  == 0) ? "even" : "odd";
    switch (step) {
      case 1:
        return 'translate3d(0px, 150%, 0px) rotate3d(0, 0, 1, 180deg) scale(5, 1)';
      case 2:
        return 'translate3d(0px, 150%, 0px) rotate3d(0, 0, 1, 360deg) scale(5, 1)';
      case 3:
        return 'translate3d(0px, 150%, 0px) rotate3d(0, 0, 1, 540deg) scale(5, 1)';
      case 4:
        return 'translate3d(0px, 0%, 0px) rotate3d(0, 0, 1, 720deg) scale(5, 1)';
      default:
        return 'translate3d(0, 0% ,0)';
    }
  }
  const transitionBlockStyle = {
    transform: setBlockTransition(step),
  };

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
    <div className="ele__view-overflow-wrapper">

      <div
        className={`ele__view-interior-wrapper ${step > 0 ? 'frame-zoom' : ''} vh-100`}
        onTouchStart={wrapperOnTouchStart}
        onTouchMove={wrapperOnTouchMove}
        onWheel={wrapperOnWheel}
      >
        <div className="d-flex h-100 w-100">
          <div className="bg__text-wrapper">
            <div className={`bg__text-container w-100 h-100`}>
              <div className="bg__text-enter h-100 d-flex flex-column justify-content-center align-items-center">
                <h1
                  className={`display-1 text-white ${step > 0 ? 'ani__slide-out-right' : ''}`}
                  onClick={() => setStep(1)}
                >
                  ENTER
                </h1>
              </div>
              {/* <div className="h-33 d-flex flex-column justify-content-center">
                <h4 className="display-1 fst-italic mb-0">Matthew</h4>
              </div>
              <div className="h-33 d-flex flex-column justify-content-center align-items-center">
                <h4 className="display-1 fst-italic mb-0 text-center">Ryan</h4>
              </div>
              <div className="h-33 d-flex flex-column justify-content-center align-items-end">
                <h4 className="display-1 fst-italic mb-0">Gilbert</h4>
              </div> */}
            </div>
          </div>
          <div
            className="bg-animation" style={transitionBlockStyle}>
          </div>
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