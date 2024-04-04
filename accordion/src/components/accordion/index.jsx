/**
 * Single selection
 * Multi selection
 */

import { useState } from 'react';
import data from './data';

import './style.css';
import { ReactComponent as CaretUp } from './icons/iconmonstr-caret-up-filled.svg';
import { ReactComponent as CaretDown } from './icons/iconmonstr-caret-down-filled.svg';

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (currentID) => {
    setSelected(currentID === selected ? null : currentID);
  };

  return (
    <div className="wrapper">
      <h1>FAQ</h1>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className={
                'item' +
                ` ${selected === dataItem.id ? 'accordion-item-wrap' : ''}`
              }
            >
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                {selected === dataItem.id ? (
                  <CaretUp className="caret-up" />
                ) : (
                  <CaretDown className="caret-down" />
                )}
              </div>

              {selected === dataItem.id ? (
                <p className="answer">{dataItem.answer}</p>
              ) : null}
            </div>
          ))
        ) : (
          <div>Nothing to render!</div>
        )}
      </div>
    </div>
  );
}
