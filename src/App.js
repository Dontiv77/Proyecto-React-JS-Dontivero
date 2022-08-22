import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">´
      <NavBar />
      <header className="App-header">
        <p>
          Daniel Ontivero
        </p>
        <p>Cascos Van Damme</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
