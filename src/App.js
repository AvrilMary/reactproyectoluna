
import './App.css';
import React from 'react';
import "./i18n";
import LanguageSelector from "./components/LanguageSelector";
import Home from './components/Home';
import NuestraHistoria from './components/NuestraHistoria';
import Retreats from './components/Retreats';
import Recursos from './components/Recursos';
import Contacto from './components/Contacto';
import {Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <div className="App">

      <LanguageSelector />
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nuestraHistoria/" element={<NuestraHistoria/>}/>
        <Route path="/retreats/" element={<Retreats/>}/>
        <Route path="/recursos/" element={<Recursos/>}/>
        <Route path="/contacto/" element={<Contacto/>}/>
      </Routes>
    

    </div>
  );
}

export default App;
