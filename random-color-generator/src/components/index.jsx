import { useEffect, useState } from 'react';

import './styles.css';

import { HEX_CODES, RGB_COLOR_VALUE } from '../constants';

export default function RandomColorGenerator() {
  const copyText = 'Copy';

  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');
  const [copyButtonText, setCopyButtonText] = useState(copyText);

  const generateRandomNumber = (lengthOfHexOrRgbCodes) => {
    return Math.floor(Math.random() * lengthOfHexOrRgbCodes);
  };

  const handleCreateRandomHexColor = () => {
    // #0698ED
    let hexColorCode = '#';

    for (let i = 0; i < 6; i++) {
      hexColorCode += HEX_CODES[generateRandomNumber(HEX_CODES.length)];
    }

    setColor(hexColorCode);
  };

  const handleCreateRandomRgbColor = () => {
    const redProportion = generateRandomNumber(RGB_COLOR_VALUE);
    const greenProportion = generateRandomNumber(RGB_COLOR_VALUE);
    const blueProportion = generateRandomNumber(RGB_COLOR_VALUE);

    // rgb(126, 200, 55)
    setColor(`rgb(${redProportion}, ${greenProportion}, ${blueProportion})`);
  };

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  useEffect(() => {
    if (copyButtonText === copyText) return;

    setTimeout(() => setCopyButtonText(copyText), [2000]);
  }, [copyButtonText]);

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="button-wrapper">
        <button
          onClick={() => {
            setTypeOfColor('hex');

            handleCreateRandomHexColor();
          }}
          className="hex-color-button"
        >
          Create HEX Color
        </button>
        <button
          onClick={() => {
            setTypeOfColor('rgb');

            handleCreateRandomRgbColor();
          }}
          className="rgb-color-button"
        >
          Create RGB Color
        </button>
      </div>
      <div className="color-info">
        <h3 className="color-profile">
          {typeOfColor === 'rgb' ? 'RGB Code' : 'HEX Code'}
        </h3>
        <h1 className="color-code">{color}</h1>
        <button
          className="copy-button"
          onClick={() => {
            // copy the text to clipboard
            navigator.clipboard.writeText(color);

            setCopyButtonText('Copied ✅');
          }}
          disabled={copyButtonText !== copyText}
        >
          {copyButtonText}
        </button>
      </div>
    </div>
  );
}
