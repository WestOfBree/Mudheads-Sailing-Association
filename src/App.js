import logo from './logo.svg';
import './App.css';
import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './Pages/Home';
import Post from './Pages/Post';
import About from './Pages/About';
import Events from './Pages/Events';
import PastRaces from './Pages/PastRaces';
import { Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav />
    <div className="row">
      <Routes><Route path="/" element={<Home />} /></Routes>
      <Routes><Route path="/Post" element={<Post />} /></Routes>
      <Routes><Route path="/About" element={<About />} /></Routes>
      <Routes><Route path="/Events" element={<Events />} /></Routes>
      <Routes><Route path="/PastRaces" element={<PastRaces />} /></Routes>

      </div>
         <Footer />
    </div>
  );
}

export default App;
