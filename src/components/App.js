import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import ReactTypingEffect from 'react-typing-effect';
// import { Link, Element } from 'react-scroll';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [step, setStep] = useState(0);
  const [ticker, setTicker] = useState(false);
  const tickerDelay = 2000;

  const setBlockTransition = (step) => {
    // const evenOrOdd = (step % 2  == 0) ? "even" : "odd";
    switch (step) {
      case 1:
        return 'translate3d(0px, 145%, 0px) rotate3d(0, 0, 1, 180deg) scale(5, 1)';
      case 2:
        return 'translate3d(0px, 145%, 0px) rotate3d(0, 0, 1, 360deg) scale(5, 1)';
      case 3:
        return 'translate3d(0px, 145%, 0px) rotate3d(0, 0, 1, 540deg) scale(5, 1)';
      case 4:
        return 'translate3d(0px, 0%, 0px) rotate3d(0, 0, 1, 720deg) scale(1, 1)';
      default:
        return 'translate3d(0, 0% ,0)';
    }
  }

  const transitionBlockStyle = {
    transform: setBlockTransition(step),

  };

  useEffect(() => {
    const ticketId = setTimeout(() => {
      setTicker(true);
    }, tickerDelay);

    return () => {
      clearTimeout(ticketId);
    }
  }, [ticker]);

  const onWheel = (e) => {
    // early return if the ticker timeout is in progress
    if (!ticker === true) { return }
    if (e.nativeEvent.wheelDelta > 0) {
      // on the base step, so you can't go up
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
    <div className="vh-100" onWheel={onWheel}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-warning mt-5">
              <h2>Scroll Enabled: {ticker ? 'true' : 'false'}</h2>
              <h2>Step: {step}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="display-4 typing-effect-input">
              I am <em>
                <ReactTypingEffect
                  text={[
                    "innovative.",
                    "passionate.",
                    "creative.",
                    "motivated.",
                    "ambitious.",
                    "efficient.",
                    "agile.",
                    "reliable.",
                    "driven."
                  ]}
                  speed={200}
                  eraseSpeed={100}
                  eraseDelay={1000}
                  typingDelay={1000}
                />
              </em>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="bg-test" style={transitionBlockStyle}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;