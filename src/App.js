import logo from './logo.svg';
import './App.css';
import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './Pages/Home';
import Post from './Pages/Post';
function App() {
  return (
    <div className="App">
    <div className="container">
      <Nav />
      <Home />
      <Post />
      </div>
         <Footer />
    </div>
  );
}

export default App;
