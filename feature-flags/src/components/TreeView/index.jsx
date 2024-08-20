import MenuList from './MenuList';

import './styles.css';

const RecursiveNavigationMenu = ({ menus = [] }) => {
  return (
    <div className="menu-list-wrapper">
      <h1 className="header">Recursive Navigation Menu</h1>
      <MenuList list={menus} />
    </div>
  );
};

export default RecursiveNavigationMenu;
