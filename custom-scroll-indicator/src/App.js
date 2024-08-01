import ScrollIndicator from 'components/index';

function App() {
  const apiUrl = `https://dummyjson.com/products?limit=100`;

  return (
    <div className="App">
      <ScrollIndicator apiUrl={apiUrl} />
    </div>
  );
}

export default App;
