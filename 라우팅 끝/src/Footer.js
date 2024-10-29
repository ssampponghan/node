// src/Footer.js
import React from 'react';
import './Footer.css'; // 스타일 파일 import (선택 사항)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#about">회사소개</a>
          <a href="#contact">고객센터</a>
          <a href="#terms">이용약관</a>
          <a href="#privacy">개인정보처리방침</a>
        </div>
        <div className="footer-info">
          <p>© 2024 SSAMPPONGHAN. 모든 권리 보유.</p>
          <p>전화: 010-5877-4485 | 이메일: dick@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
