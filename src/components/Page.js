import React from 'react';

const Page = ({ step }) => {
  return (
    <div>
      {
        step !== 0 &&
        <div className={'ele__page-wrapper'}>
          <div className={`w-100 h-50`}>
            Page
          </div>
        </div>
      }
    </div>
  )
};

export default Page;