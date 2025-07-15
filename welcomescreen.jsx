import React from 'react';
import './welcomescreen';

const WelcomeScreen = () => {
  return (
    <div className="welcome">
      <img src="/bgimage.png" alt="welcome" className="welcome-image" />
      <h1>Pocket Notes</h1>
      <p>
        Send and receive messages without keeping your phone online. <br />
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div className="lock">
        <img src="/lock.png" alt="lock" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  );
};

export default WelcomeScreen;
