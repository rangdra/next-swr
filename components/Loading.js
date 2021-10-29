import React from 'react';

const Loading = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: 32 }}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
