import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import gsap from 'gsap';

// 파일
import Header from './components/Layout/Header'
import Main from './components/Main'

import './assets/css/style.css'

const App = () => {

  const [isLeftPanelVisible, setIsLeftPanelVisible] = useState(false);
  const [isRightPanelVisible, setIsRightPanelVisible] = useState(false);

  const handleMenuClick = () => {
    setIsLeftPanelVisible(!isLeftPanelVisible)
    console.log("isLeftPanelVisible:", !isLeftPanelVisible)

    if (!isLeftPanelVisible) {
      gsap.to(".main-left", { left: 0, ease: "power4.out", duration: 0.5 });
    } else {
      gsap.to(".main-left", { left: -300, ease: "power4.out", duration: 0.5 });
    }
  };

  const handleCommentClick = () => {
    setIsRightPanelVisible(!isRightPanelVisible)
    console.log("isRightPanelVisible:", !isRightPanelVisible)

    if (!isRightPanelVisible) {
      gsap.to(".main-right", { right: 0, ease: "power4.out", duration: 0.5 });
    } else {
      gsap.to(".main-right", { right: -300, ease: "power4.out", duration: 0.5 });
    }
  };



  return (
    <BrowserRouter>
      <Header
        onNavButtonClick={handleMenuClick}
        onCommentButtonClick={handleCommentClick}
      />
      <Main />
    </BrowserRouter>
  )
}

export default App