
import './App.css';
import React from 'react';
import "./i18n";
import LanguageSelector from "./components/LanguageSelector";
import Home from './components/Home';
import NuestraHistoria from './components/NuestraHistoria';
import {Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <div className="App">

      <LanguageSelector />
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nuestraHistoria/" element={<NuestraHistoria/>}/>
      </Routes>
    

    </div>
  );
}

export default App;
