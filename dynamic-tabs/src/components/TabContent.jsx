import Tabs from 'components/Tabs';

const ThirdTab = () => {
  return <div>This is content for tab 3</div>;
};

const TabContent = () => {
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
      content: <ThirdTab />,
    },
  ];

  return <Tabs tabsContent={tabsContent} />;
};

export default TabContent;
