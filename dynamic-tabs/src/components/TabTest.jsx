import Tabs from 'components/Tabs';

const Tab3 = () => {
  return <div>This is content for tab 3</div>;
};

const TabTest = () => {
  const tabsContent = [
    {
      label: 'Tab 1',
      content: <div>This is content for tab 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>This is content for tab 2</div>,
    },
    {
      label: 'Tab 3',
      content: <Tab3 />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabsContent} onChange={handleChange} />;
};

export default TabTest;
