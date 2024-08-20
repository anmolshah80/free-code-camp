import { useState } from 'react';

import MenuList from './MenuList';

import { FaPlus, FaMinus } from 'react-icons/fa';

const RenderMenuItem = ({
  item,
  handleToggleChildren,
  renderCurrentChildren,
}) => {
  if (!item) return null;
  else if (item.children && item.children.length > 0) {
    return (
      <>
        <button
          onClick={() => handleToggleChildren(item.label)}
          className="toggle-button"
        >
          {item.label}
          {renderCurrentChildren[item.label] ? (
            <FaMinus className="toggle-icon" />
          ) : (
            <FaPlus className="toggle-icon" />
          )}
        </button>
      </>
    );
  } else {
    return <p className="label">{item.label}</p>;
  }
};

const MenuItem = ({ item }) => {
  const [renderCurrentChildren, setRenderCurrentChildren] = useState({});

  const handleToggleChildren = (currentLabel) => {
    setRenderCurrentChildren({
      ...renderCurrentChildren,
      [currentLabel]: !renderCurrentChildren[currentLabel],
    });
  };

  return (
    <li className="menu-item-wrapper">
      <div className="menu-item">
        <RenderMenuItem
          item={item}
          handleToggleChildren={handleToggleChildren}
          renderCurrentChildren={renderCurrentChildren}
        />
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      renderCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
