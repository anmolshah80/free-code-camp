import { useState } from 'react';

import './tabs.css';

const TabLabel = ({ tabsContent, handleOnClick, currentTabIndex }) =>
  tabsContent.map((tabItem, index) => {
    const className = `tab-item ${currentTabIndex === index ? 'active' : ''}`;

    return (
      <div
        key={tabItem.label}
        onClick={() => handleOnClick(index)}
        className={className}
      >
        <span className="label">{tabItem.label}</span>
      </div>
    );
  });

const Tabs = ({ tabsContent }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (index) => {
    setCurrentTabIndex(index);
  };

  return (
    <div className="container">
      <div className="heading">
        <TabLabel
          tabsContent={tabsContent}
          handleOnClick={handleOnClick}
          currentTabIndex={currentTabIndex}
        />
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
