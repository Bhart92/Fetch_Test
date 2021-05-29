import Header from'./components/Header/Header'
import DataTable from'./components/DataTable/DataTable'
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <main className='data-table'>
          <DataTable />
        </main>
      </ Provider>
    </div>
  );
};

export default App;
