import React from 'react';
import './scss/home-styles.css';

function Home() {
  return (
    <div className="invite">
      <legend>Invite Code:</legend>
      <input type="text" id="invite-code" />
    </div>
  );
}

export default Home;
