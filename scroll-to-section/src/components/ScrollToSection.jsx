import { useRef } from 'react';

import data from 'constants/data';

import './styles.css';

const RenderCards = ({ cardRef }) => {
  if (!data) return null;

  return data.map((item, index) => (
    <div
      key={item.id}
      style={item.styles}
      ref={index === 3 ? cardRef : null}
      className="card-container"
    >
      <h3 className="card-label">{item.label}</h3>
    </div>
  ));
};

export default function ScrollToSection() {
  const cardRef = useRef(null);

  const handleScrollToSection = () => {
    let position = cardRef.current.getBoundingClientRect().top;

    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <h1>Scroll to Section</h1>
      <button onClick={handleScrollToSection} className="scroll-button">
        Scroll to 4th Card
      </button>
      <RenderCards cardRef={cardRef} />
    </div>
  );
}
