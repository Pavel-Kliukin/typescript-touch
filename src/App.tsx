import React from 'react';
import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './pages/About';
import UsersView from './pages/UsersView';
import UserSingle from './components/Users/UserSingle';

function App() {
  return (
    <div className="App">
      <CustomButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<UsersView />} />
          <Route path="/users/:userId" element={<UserSingle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
