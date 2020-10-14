import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="grid">
      <p style = {{ color: 'pink' }}>
      
      <Header/>     
      <Contact/>
      <Footer/>
      </p>
    </div>
  );
}

export default App;
