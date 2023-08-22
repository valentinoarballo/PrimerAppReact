import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Clock from "./components/reloj"
import Saludar from './components/saludar';
import Toast from './components/toast';
import MostrarImagen from './components/imagen';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <Saludar 
        nombre="Valentino" 
        apellido="Arballo"/>
        
        <Clock />
        
        <Toast />

        <MostrarImagen />

      </header>
    </div>
  );
}

export default App;
