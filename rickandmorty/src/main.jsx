import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Navbar';
import Character from './pages/Character';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/characters/:id' element={<Character />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
