import { useState } from 'react';

import './tabs.css';

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (index) => {
    setCurrentTabIndex(index);
    onChange(index);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            key={tabItem.label}
            onClick={() => handleOnClick(index)}
            className={`tab-item ${currentTabIndex === index ? 'active' : ''}`}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
