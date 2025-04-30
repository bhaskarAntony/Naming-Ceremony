import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import Gallery from './pages/Gallery';
import RSVP from './pages/RSVP';
import Gifts from './pages/Gifts';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="details" element={<Details />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="rsvp" element={<RSVP />} />
            <Route path="gifts" element={<Gifts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;