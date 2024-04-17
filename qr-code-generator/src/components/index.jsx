import { useState, useEffect } from 'react';

import QRCode from 'react-qr-code';

import './styles.css';

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [inputValue, setInputValue] = useState('SIC PARVIS MAGNA');
  const [isGenerateButtonDisabled, setGenerateButtonDisabled] = useState(false);
  const [validationMessage, setValidationMessage] = useState(null);

  const generateQrCode = () => {
    setGenerateButtonDisabled(
      inputValue && inputValue.trim() !== '' ? false : true,
    );

    if (inputValue.length > 25) return;

    setQrCode(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    generateQrCode();
    setGenerateButtonDisabled(true);
  }, []);

  const generateButtonDisabledClassName = isGenerateButtonDisabled
    ? 'generate-button-disabled'
    : '';

  return (
    <div>
      <h1 className="header">Generate QR Code</h1>
      <div className="qr-code-wrapper">
        <input
          className={`text-input`}
          style={
            isGenerateButtonDisabled
              ? { borderColor: 'rgba(118, 118, 118, 0.3)' }
              : null
          }
          type="text"
          name="qr-code"
          placeholder="Enter a word"
          value={inputValue}
          onChange={(event) => {
            if (event.target.value.length > 25) {
              setValidationMessage('Please enter less than 26 characters.');
              setGenerateButtonDisabled(true);
            } else {
              setValidationMessage(null);
              setGenerateButtonDisabled(false);
            }

            setInputValue(event.target.value);
          }}
        />
        <button
          className={`generate-qr-code-button ${generateButtonDisabledClassName}`}
          disabled={isGenerateButtonDisabled}
          onClick={generateQrCode}
        >
          Generate
        </button>
      </div>
      <p className="validation-message">{validationMessage}</p>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
