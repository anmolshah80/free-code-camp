import RecursiveNavigationMenu from './components';

import menus from './components/data';

import './App.css';

function App() {
  return (
    <div className="App">
      {/*
       *
       * The component `RecursiveNavigationMenu` can be used for either of these projects:
       * Tree View Component
       * Menu UI Component
       * Recursive Navigation Menu
       *
       * */}
      <RecursiveNavigationMenu menus={menus} />
    </div>
  );
}

export default App;
