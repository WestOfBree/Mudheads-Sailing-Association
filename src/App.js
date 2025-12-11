import logo from './logo.svg';
import './App.css';
import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './Pages/Home';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
    <div className="container">
      <Nav />
      <Home />
      </div>
         <Footer />
    </div>
  );
}

export default App;
