import FeatureFlagGlobalState from 'context';

import FeatureFlags from 'components';

import './App.css';

function App() {
  return (
    <div className="App">
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
