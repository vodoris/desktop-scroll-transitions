import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Path = ({ step }) => {

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

  return (
    <div className={`ele__path-wrapper ${step > 0 ? 'activate' : ''}`}>
      <div className={`ele__path`}>
        {
          runIcons()
        }
      </div>
    </div>
  );
};

export default Path;