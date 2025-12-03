import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import setBodyHeight from "./utility/setBodyHeight.js";

import Header from './components/Header.js';
import Home from "./pages/Home.js";
import Resume from "./pages/Resume.js";
import Work from "./pages/Work.js";
import Contact from "./pages/Contact.js";

import "./css/main.css";

function App() {
  const [activePage, setActivePage] = useState(0);

  function onClickHandler(i) {
    setActivePage(i);
  }

  return (
    <div className="bg">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home activePage={activePage} onClick={onClickHandler} />} />
            <Route path="resume" element={<Resume activePage={activePage} onClick={onClickHandler} />} />
            <Route path="work" element={<Work activePage={activePage} onClick={onClickHandler} />} />
            <Route path="contact" element={<Contact activePage={activePage} onClick={onClickHandler} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
