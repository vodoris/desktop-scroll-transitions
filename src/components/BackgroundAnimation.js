import React from 'react';

const BackgroundAnimation = ({ step }) => {

  const setBlockTransition = (step) => {
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

  return (
    <div
      className="bg-animation" style={transitionBlockStyle}>
    </div>
  )
}

export default BackgroundAnimation;