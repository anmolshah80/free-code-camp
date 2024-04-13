import ImageSlider from './components';

import './App.css';

function App() {
  const apiUrl = 'https://picsum.photos/v2/list';

  return (
    <div className="App">
      <ImageSlider apiUrl={apiUrl} page={2} imagesLimit={10} />
    </div>
  );
}

export default App;
