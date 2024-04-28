import useLocalStorage from './useLocalStorage';

import './theme.css';

const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-switch-container" data-theme={theme}>
      <h1 className="header">Theme Switch</h1>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme} className="change-theme-button">
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
