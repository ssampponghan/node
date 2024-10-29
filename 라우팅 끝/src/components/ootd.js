import React from 'react';
import './ootd.css'; // 스타일 파일 추가

function OOTD() {
  return (
    <div className="ootd-section">
      <h2>DAILY</h2>
      <p>Today's recommended outfit</p>

      <div className="ootd-grid">
        <div className="ootd-item">
          <img src="/images/exex.png" alt="Outfit 1" />
          <p>Trendy Picks</p>
        
        </div>
      </div>
    </div>
  );
}

export default OOTD;
