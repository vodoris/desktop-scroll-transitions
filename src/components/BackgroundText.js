import React from 'react';

const BackgroundText = ({ setStep }) => {
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
}

export default BackgroundText;