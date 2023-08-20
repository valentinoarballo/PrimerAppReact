import logo from './logo.svg';
import './App.css';
import Clock from "./components/reloj.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hora Actual</h1>
        <Clock />
      </header>
    </div>
  );
}

export default App;
