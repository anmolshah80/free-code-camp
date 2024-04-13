import './App.css';
import LoadMoreData from './components';

function App() {
  return (
    <div className="App">
      <LoadMoreData productsLimit={20} />
    </div>
  );
}

export default App;
