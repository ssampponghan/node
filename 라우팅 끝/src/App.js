// src/App.js
import React from 'react';
import './App.css';
import Category from './components/category'; // 파일명 수정
import OOTD from './components/ootd'; // 파일명 수정
import Best from './components/best'; // 파일명 수정
import Outer from './components/outer'; // 파일명 수정
import Top from './components/top'; // 파일명 수정
import Bottom from './components/bottom'; // 파일명 수정
import Shoes from './components/shoes'; // 파일명 수정
import Footer from './Footer';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; //라우팅

function App() {
  return (
    <BrowserRouter>
      <AppContent /> {/* AppContent를 따로 만들어서 라우터 안에서 사용 */}
    </BrowserRouter>
  );
}

function AppContent() {
  
  const navigate = useNavigate(); // 버튼 클릭 시 페이지 이동 라우터
  
  return (
    <div className="App">
      <div className="container">
        <h1 className="brand-title" onClick={() =>{
          navigate('/');
        }}>
          SSAMPPONGHAN
        </h1>

        <div className="top-banner">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="검색어를 입력하시오"
            />
            <button className="search-button">
              <img src="images/search.png" alt="검색 아이콘" className="search-icon" />
            </button>
          </div>

          <div className="menu-container">
            <button className="profile-button">
              <img src="/images/profile.png" alt="프로필 아이콘" className="profile-icon" />
            </button>
            <button className="shopping-button">
              <img src="/images/shopping.png" alt="장바구니 아이콘" className="shopping-icon" />
            </button>
          </div>
        </div>

        <hr />
        <Category /> {/* 카테고리 컴포넌트 */}
        <hr />
        <Routes>
          <Route path='/' element={<OOTD />}/>
          <Route path='/best' element={<Best />}/>
          <Route path='/outer' element={<Outer />}/>
          <Route path='/top' element={<Top />}/>
          <Route path='/bottom' element={<Bottom />}/>
          <Route path='/shoes' element={<Shoes />}/>
        </Routes>
        <hr />
        <Footer /> {/* 푸터 컴포넌트 */}
      </div>
    </div>
  );
}

export default App;
