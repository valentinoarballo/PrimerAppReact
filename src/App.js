import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Reloj from "./components/reloj"
import Saludar from './components/saludar';
import Toast from './components/toast';
import MostrarImagen from './components/imagen';
import Personas from './components/personas';

function App() {

  const listaNombres = ["Pedro Lucero", "Lionel Messi","Valentino Arballo", "Carlitos Tevez"];
  const listaEdades = [5, 35,20];
  return (
    <div className="App">
      <header className="App-header">
        
        <Saludar 
        nombre="Valentino" 
        apellido="Arballo"/>
        
        <Reloj />
        
        <Toast />

        <MostrarImagen />

        <Personas listaNombres={listaNombres} listaEdades = {listaEdades}/>

      </header>
    </div>
  );
}

export default App;
