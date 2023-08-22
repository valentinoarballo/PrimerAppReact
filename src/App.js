import logo from './logo.svg';
import './App.css';
import Clock from "./components/reloj.jsx"
import Saludar from './components/saludar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Saludar 
        nombre="Valentino" 
        apellido="Arballo"/>
        
        <Clock />
      
      </header>
    </div>
  );
}

export default App;
