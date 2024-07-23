import './App.css';
import Header from '../header/Header';
import Button from '../button/Button';
import Table from '../table/Table';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
        <div className='btn-wrapper'>
          <Button children='Carregar Arquivo'></Button>
          <Button children='Listar Dados da base'></Button>
        </div>
        <div className='table-wrapper'>
          <Table></Table>
        </div>
      </div>
    </div>
  );
}

export default App;
