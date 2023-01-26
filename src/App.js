
import './App.css';
import React from 'react';
import Home from './components/Home';
import NuestraHistoria from './components/NuestraHistoria';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nuestraHistoria/" element={<NuestraHistoria/>}/>
      </Routes>
    </div>
  );
}

export default App;
