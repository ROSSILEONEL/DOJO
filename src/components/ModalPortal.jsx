import "./Modal.css";
import  ReactDOM  from "react-dom";



// eslint-disable-next-line react/prop-types




export const ModalPortal = ({ children, isOpenModal, closeModal }) => {
  const handleModalContainerClick = (event) => {event.stopPropagation();
  };
  return ReactDOM.createPortal(<article className={isOpenModal ? "modal is-open" : "modal"}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>

        {children}
      </div>
    </article>,document.getElementById('modal')  );
};
