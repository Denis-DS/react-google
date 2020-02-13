import React, { useState } from 'react';
import Content from './component/Content'
import Header from './component/Header'
import Footer from './component/Footer'
import './App.css';
// const style = require



const App:React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <div className="App-header">
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
