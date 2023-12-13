import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import "./App.css"
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'

function App() {
  return (
    <div className='container'>

      <Header />
      <Home />
      <About /> 

    </div>
    
  );
}

export default App;
