import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CardComponent from './components/CardComponent/CardComponent';


function App() {
  return (
    <div className="App">´
      <NavBar />
      <header className="App-header">
        <p>
        <ItemListContainer />
        </p>
        <div>
          <CardComponent 
          img ='https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/399-lumen-11-81fafffc0d1f0a596915565523814459-640-0.jpg'
          />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        {/*   Learn React */}
        </a>
      </header>
    </div>
  );
}

export default App;
