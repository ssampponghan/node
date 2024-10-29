import React, { useState } from 'react';
import './category.css'; // CSS 파일 import
import { useNavigate } from "react-router-dom";


const Category = () => {
  const [activeIndex, setActiveIndex] = useState(null); // 현재 열려 있는 카테고리 인덱스 상태

  const handleMouseEnter = (index) => {
    setActiveIndex(index); // 마우스가 들어가면 해당 카테고리 열기
  };

  const handleMouseLeave = () => {
    setActiveIndex(null); // 마우스가 나가면 드롭다운 닫기
  };

  const navigate = useNavigate(); // 버튼 클릭스 페이지 이동 라우터

  const channel = [
    '/best', '/outer', '/top', '/bottom', '/shoes'
  ]


  // 카테고리와 각각에 해당하는 드롭다운 메뉴 항목
  const categories = [
    { name: 'BEST', items: ['Most', 'New', 'Popular'] },
    { name: 'OUTER', items: ['Coat', 'Jacket', 'Parka'] },
    { name: 'TOP', items: ['Cardigan', 'Hoodies', 'Shirt'] },
    { name: 'BOTTOM', items: ['Cargo Pants', 'Chinos', 'Slacks'] },
    { name: 'SHOES', items: ['Oxfords', 'Sandals', 'Sneakers'] }
  ];

  return (
    <div className="category-section">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`category-section__item category-section__item--${category.name.toLowerCase()}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* 카테고리 이름 표시 */}
          <span>{category.name}</span>
          {/* 드롭다운 항목 */}
          <div className={`category-dropdown ${activeIndex === index ? 'show' : ''}`}>
            <ul>
              {category.items.map((item, i) => (
                <li onClick={()=>{
                  navigate(channel[index]);
                }} key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
