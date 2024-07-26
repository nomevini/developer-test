import './App.css';
import Header from '../header/Header';
import BtnLoadData from '../btnLoadData/BtnLoadData';
import BtnUpload from '../btnUpload/BtnUpload';
import Table from '../table/Table';
import { DataProvider } from '../DataContext';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
          <DataProvider>
            <div className='btn-wrapper'>
              <BtnUpload/>
              <BtnLoadData></BtnLoadData>
            </div>    

            <div className='table-wrapper'>
              <Table/>
            </div>
          </DataProvider>
      </div>
    </div>
  );
}

export default App;
