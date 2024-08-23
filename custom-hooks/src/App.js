import RenderProducts from 'components/RenderProducts';
import ShowContentOnClick from 'components/ShowContentOnClick';
import RenderWindowSize from 'components/RenderWindowSize';

import './App.css';

function App() {
  return (
    <div className="App">
      <RenderProducts />
      <ShowContentOnClick />
      <RenderWindowSize />
    </div>
  );
}

export default App;
