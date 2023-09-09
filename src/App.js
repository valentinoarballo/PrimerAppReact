  import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Reloj from "./components/reloj"
import Saludar from './components/saludar';
import Toast from './components/toast';
import MostrarImagen from './components/imagen';
import TrakMouse from './components/trackMouse';
import Personas from './components/personas';
import { Test } from './components/test';
import { useState } from 'react';
import Formulario from './components/formulario';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const listaNombres = ["Pedro Lucero", "Lionel Messi"];
  const listaEdades = [5, 35];
  
  return (
    <div className="App">
      <header className="App-header">
        
        <Saludar 
        nombre="Valentino" 
        apellido="Arballo"/>
        
        <Reloj />

        <Formulario/>
        
        <Toast />

        <MostrarImagen />

        <Personas listaNombres={listaNombres} listaEdades = {listaEdades}/>
        <button onClick={() => setIsToggled(!isToggled)}>toggle</button>
        
        {isToggled ? <Test /> : <p>not toggled</p>}

        <TrakMouse/>

      </header>
    </div>
  );
}

export default App;
