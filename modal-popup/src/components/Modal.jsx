import './styles.css';

const Modal = ({ handleModalToggle, id, header, body, footer }) => {
  return (
    <div id={id || 'Modal'} className="modal">
      <div className="modal-content">
        <div className="header">
          <h2>{header ? header : 'Header'}</h2>
          <span className="close-modal-icon" onClick={handleModalToggle}>
            &times;
          </span>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is an example Modal body</p>
            </div>
          )}
        </div>

        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
};

export default Modal;
