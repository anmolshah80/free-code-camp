/**
 * Single selection
 * Multiple selection
 */

import { useState } from 'react';
import data from './data';

import './style.css';
import { ReactComponent as CaretUp } from './icons/iconmonstr-caret-up-filled.svg';
import { ReactComponent as CaretDown } from './icons/iconmonstr-caret-down-filled.svg';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selectedAccordionItems, setSelectedAccordionItems] = useState([]);

  const handleSingleSelection = (currentID) => {
    setSelected(currentID === selected ? null : currentID);
  };

  const handleMultipleSelection = (currentID) => {
    let accordionItemIDs = [...selectedAccordionItems];
    const findIndexOfCurrentID = accordionItemIDs.indexOf(currentID);

    if (findIndexOfCurrentID === -1) accordionItemIDs.push(currentID);
    else accordionItemIDs.splice(findIndexOfCurrentID, 1);

    setSelectedAccordionItems(accordionItemIDs);
  };

  return (
    <div className="wrapper">
      <h1>FAQ</h1>
      <div className="multi-selection-input-wrapper">
        <input
          type="checkbox"
          id="multi-selection-checkbox"
          name="multi-selection-checkbox"
          checked={enableMultiSelection}
          className="multi-selection-checkbox multi-selection-button"
        />
        <button
          className="multi-selection-button"
          onClick={() =>
            setEnableMultiSelection(() => {
              setSelected(null);
              setSelectedAccordionItems([]);

              return !enableMultiSelection;
            })
          }
        >
          Enable Multi Selection
        </button>
      </div>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className={
                'item' +
                ` ${
                  selected === dataItem.id ||
                  (enableMultiSelection &&
                    selectedAccordionItems.includes(dataItem.id))
                    ? 'accordion-item-wrap'
                    : ''
                }`
              }
            >
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                {selected === dataItem.id ||
                (enableMultiSelection &&
                  selectedAccordionItems.includes(dataItem.id)) ? (
                  <CaretUp className="caret-up" />
                ) : (
                  <CaretDown className="caret-down" />
                )}
              </div>

              {enableMultiSelection
                ? selectedAccordionItems.indexOf(dataItem.id) !== -1 && (
                    <p className="answer">{dataItem.answer}</p>
                  )
                : selected === dataItem.id && (
                    <p className="answer">{dataItem.answer}</p>
                  )}
            </div>
          ))
        ) : (
          <div>Nothing to render!</div>
        )}
      </div>
    </div>
  );
}
