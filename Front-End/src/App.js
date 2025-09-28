import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import Calendar from './pages/Calendar/Calendar';
import TipsList from './pages/TipList/TipList';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // const splashShown = sessionStorage.getItem('splashShown');
    // if (splashShown) {
    //   setShowSplash(false);
    //   return;
    // }

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      const removeTimer = setTimeout(() => {
        setShowSplash(false);
        // sessionStorage.setItem('splashShown', 'true');
      }, 600);
      return () => clearTimeout(removeTimer);
    }, 2500);

    return () => clearTimeout(fadeTimer);
  }, []);

  if (showSplash) {
    return (
      <div className={`splash-wrapper ${isFading ? 'fade-out' : ''}`}>
        <SplashScreen />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="mapa" element={<Map />} />
          <Route path="calendario" element={<Calendar />} />
          <Route path="consejos" element={<TipsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

