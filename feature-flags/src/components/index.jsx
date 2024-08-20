import { useContext } from 'react';

import { AiOutlineLoading } from 'react-icons/ai';

import { FeatureFlagsContext } from 'context';

import ThemeSwitch from 'components/ThemeSwitch/index';
import RandomColorGenerator from 'components/RandomColorGenerator/index';
import Accordion from 'components/Accordion/index';
import TreeView from 'components/TreeView/index';
import QRCodeGenerator from 'components/QRCodeGenerator/index';

import menus from './TreeView/data';

import './styles.css';

const RenderComponents = ({ enabledFlags, componentsToRender }) => {
  const checkEnabledFlags = (currentKey) => {
    return enabledFlags[currentKey];
  };

  return componentsToRender.map((componentItem) =>
    checkEnabledFlags(componentItem.key) ? componentItem.component : null,
  );
};

const FeatureFlags = () => {
  const { loading, errorMessage, enabledFlags } =
    useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <ThemeSwitch />,
    },
    {
      key: 'showRandomColorGenerator',
      component: <RandomColorGenerator />,
    },
    {
      key: 'showAccordion',
      component: <Accordion />,
    },
    {
      key: 'showTreeView',
      component: <TreeView menus={menus} />,
    },
    {
      key: 'showQRCodeGenerator',
      component: <QRCodeGenerator />,
    },
  ];

  if (loading) return <AiOutlineLoading className="loading-icon" />;

  if (errorMessage)
    return <p className="error-message">Error: {errorMessage}</p>;

  return (
    <>
      <h1 className="page-title">Feature Flags</h1>
      <RenderComponents
        enabledFlags={enabledFlags}
        componentsToRender={componentsToRender}
      />
    </>
  );
};

export default FeatureFlags;
