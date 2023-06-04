import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import DetailThreads from './pages/detailThread';
import Loading from './components/loading';
import './style/style.css';
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <div className="app__container">
        <Loading />
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div className="app__container">
      <Loading />
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/detailthreads/:id" element={<DetailThreads />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
