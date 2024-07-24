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
          <Table data={[['Titulo1' , 'Titulo2', 'Titulo3', 'Titulo4', 'Titulo5'],['info1' , 'info2', 'info3', 'info4', 'info5'],['info1' , 'info2', 'info3', 'info4', 'info5'],['info1' , 'info2', 'info3', 'info4', 'info5'],['info1' , 'info2', 'info3', 'info4', 'info5']]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
