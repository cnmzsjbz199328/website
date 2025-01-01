import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './aboutUs/AboutUS';
import Services from './services/Services';
import Activities from './activities/Activities';
import Volunteering from './volunteering/Volunteering';
import Contact from './contact/Contact';
import VenueHire from './venueHire/VenueHire';
import AdminPanel from './admin/AdminPanel'; // 引入 AdminPanel 组件
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import BubbleBackground from './specialEffect/BubbleBackground'; // 引入新组件
import './supabaseClient'; // This loads first

/**
 * 定义应用程序的主组件App。
 * 
 * 此组件负责渲染整个应用的基本结构，包括导航栏、头部、主体内容和页脚。
 * 同时使用React Router来处理页面路由。
 */
function App() {
  return (
    <Router>
      <div className="App">
        <BubbleBackground /> 
        <Navbar />
        <Routes>
          <Route index element={<ErrorBoundary><AboutUs /></ErrorBoundary>} />
          <Route path="/aboutUs" element={<ErrorBoundary><AboutUs /></ErrorBoundary>} />
          <Route path="/services" element={<ErrorBoundary><Services /></ErrorBoundary>} />
          <Route path="/activities" element={<ErrorBoundary><Activities /></ErrorBoundary>} />
          <Route path="/venueHire" element={<ErrorBoundary><VenueHire /></ErrorBoundary>} />
          <Route path="/volunteering" element={<ErrorBoundary><Volunteering /></ErrorBoundary>} />
          <Route path="/contact" element={<ErrorBoundary><Contact /></ErrorBoundary>} />
          <Route path="/admin" element={<ErrorBoundary><AdminPanel /></ErrorBoundary>} /> {/* 添加 AdminPanel 路由 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;