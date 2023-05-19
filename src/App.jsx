import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';

function App() {
  return (
    <div className="app__container">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
