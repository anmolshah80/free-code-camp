import { useRef, useState } from 'react';

import useOnClickOutside from 'hooks/useOnClickOutside';

const ShowContentOnClick = () => {
  const contentRef = useRef(null);

  const [showContent, setShowContent] = useState(false);

  useOnClickOutside(contentRef, () => setShowContent(false));

  return (
    <div>
      <h1>useOnClickOutside Hook</h1>
      {showContent ? (
        <div className="content" ref={contentRef}>
          <p>This is a hidden content that is now visible to you</p>
          <p>Click outside this content area to hide it from the page</p>
        </div>
      ) : (
        <button
          className="show-content-button"
          onClick={() => setShowContent(true)}
        >
          Show Content
        </button>
      )}
    </div>
  );
};

export default ShowContentOnClick;
