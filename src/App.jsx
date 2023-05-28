import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import DetailThreads from './pages/detailThread';
import Loading from './components/loading';
import './style/style.css';

function App() {
  return (
    <div className="app__container">
      <Loading />
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detailthreads/:id" element={<DetailThreads />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
