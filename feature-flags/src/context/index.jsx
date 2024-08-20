import { createContext, useEffect, useState } from 'react';

import featureFlagsDataServiceCall from 'api/data';

export const FeatureFlagsContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeaturedFlags = async () => {
    setLoading(true);

    try {
      const response = await featureFlagsDataServiceCall();

      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      debugger;
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider
      value={{ loading, errorMessage, enabledFlags }}
    >
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagGlobalState;
