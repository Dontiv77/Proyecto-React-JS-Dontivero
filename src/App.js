import './App.css';
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CardComponent from './components/CardComponent/CardComponent';
import Contador from './components/ItemCounts/ItemCounts';
import DaniList from './components/Items/ItemList';


function App() {
  return (
    <div className="App">´
      <NavBar />
      <header className="App-header">
        <p>
        <ItemListContainer />
        </p>
        <div className='Cards-Container'>
        <DaniList />
        </div>
        <div className='UserSection'>
          <CardComponent 
          name="Valiant 399"
          img ='https://d3ugyf2ht6aenh.cloudfront.net/stores/940/460/products/399-lumen-11-81fafffc0d1f0a596915565523814459-640-0.jpg'
          description ="El VALIANT es un casco modular doble visor, está doblemente certificado como un FULL FACE y un CASCO ABIERTO. La apertura es de 180º brindando el macanismo mas estable del mundo, ofrece excelente visibilidad lateral e incluye Pinlock antifog."
          />
        </div>
        
        <Contador/>
      </header>
    </div>
  );
}

export default App;
