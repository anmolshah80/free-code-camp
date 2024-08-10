import './styles.css';

const RenderHeader = ({ headerContent }) => {
  if (headerContent) return headerContent;

  return <h2>Header</h2>;
};

const RenderBody = ({ bodyContent }) => {
  if (bodyContent) return bodyContent;

  return (
    <div>
      <p>This is an example Modal body</p>
    </div>
  );
};

const RenderFooter = ({ footerContent }) => {
  if (footerContent) return footerContent;

  return <h2>Footer</h2>;
};

const Modal = ({ handleModalToggle, id, header, body, footer }) => {
  return (
    <div id={id || 'Modal'} className="modal">
      <div className="modal-content">
        <div className="header">
          <RenderHeader headerContent={header} />
          <span className="close-modal-icon" onClick={handleModalToggle}>
            &times;
          </span>
        </div>
        <div className="body">
          <RenderBody bodyContent={body} />
        </div>
        <div className="footer">
          <RenderFooter footerContent={footer} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
