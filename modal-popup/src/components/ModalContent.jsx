import { useState } from 'react';

import { MdError } from 'react-icons/md';
import { AiOutlineLoading } from 'react-icons/ai';

import Modal from 'components/Modal';

const RenderModal = ({
  showModalPopup,
  handleModalToggle,
  setShowModalPopup,
  loading,
  setLoading,
}) => {
  if (!showModalPopup) return null;

  const handleIteration = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowModalPopup(true);
    }, 1500);
  };

  const header = (
    <div className="error-message-title">
      <MdError className="error-icon" />
      <p>Connection error</p>
    </div>
  );

  const body = (
    <div className="error-message-container">
      <p className="error-message-header">Unable to connect to DB123</p>
      <p className="error-message-details">
        Check your network connection and verify that you have the correct
        permissions.
      </p>
    </div>
  );

  const footer = (
    <div className="buttons-container">
      <button className="try-again-button" onClick={handleIteration}>
        Try again
      </button>
      <button className="cancel-button" onClick={handleModalToggle}>
        Cancel
      </button>
    </div>
  );

  if (loading) {
    return <AiOutlineLoading className="loading-icon" />;
  }

  return (
    <Modal
      handleModalToggle={handleModalToggle}
      header={header}
      body={body}
      footer={footer}
    />
  );
};

const ModalContent = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleModalToggle = () => {
    setShowModalPopup((previousValue) => !previousValue);
  };

  const modalButtonVisibility = loading ? 'hide-modal-button' : '';

  return (
    <div className="modal-container">
      <button
        onClick={handleModalToggle}
        className={`modal-open-button ${modalButtonVisibility}`}
      >
        Open Modal Popup
      </button>
      <RenderModal
        showModalPopup={showModalPopup}
        handleModalToggle={handleModalToggle}
        setShowModalPopup={setShowModalPopup}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
};

export default ModalContent;
