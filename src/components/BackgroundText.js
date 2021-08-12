import React from 'react';

const BackgroundText = ({ step, setStep }) => {

  const setBackgroundText = () => {
    if (step === 0) {
      return (
        <div className={`bg__text-container w-100 h-100`}>
          <div className={`bg__text-enter h-100 d-flex flex-column justify-content-center align-items-center`}>
            <h1
              className={`display-1 text-white`}
              onClick={() => setStep(1)}
            >
              ENTER
            </h1>
          </div>
        </div>
      )
    } else {
      return (
        <div className={`bg__text-container w-100 h-100`}>
          <div className={`h-33 d-flex flex-column justify-content-center`}>
            <h4 className={`display-1 fst-italic mb-0`}>Matthew</h4>
          </div>
          <div className={`h-33 d-flex flex-column justify-content-center align-items-center`}>
            <h4 className={`display-1 fst-italic mb-0 text-center`}>Ryan</h4>
          </div>
          <div className={`h-33 d-flex flex-column justify-content-center align-items-end`}>
            <h4 className={`display-1 fst-italic mb-0`}>Gilbert</h4>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={`bg__text-wrapper`}>
      {setBackgroundText()}
    </div>
  )
}

export default BackgroundText;