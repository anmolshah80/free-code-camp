import { useEffect } from 'react';

const useOnClickOutside = (contentRef, hideContent) => {
  useEffect(() => {
    const listener = (event) => {
      if (!contentRef.current || contentRef.current.contains(event.target)) {
        debugger;
        return;
      }

      hideContent(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [contentRef, hideContent]);
  return {};
};

export default useOnClickOutside;
