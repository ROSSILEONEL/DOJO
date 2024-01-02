import './Modal.css'
// eslint-disable-next-line react/prop-types
export const Modal = ({ children,isOpenModal, closeModal }) => {
  return <article className={isOpenModal ? "modal is-open" : "modal"}>
    <div className="modal-container">
    <button className="modal-close" onClick={closeModal} >X</button>
    
    {children}
    </div>
      
    </article>;
};
//el error esta en el children de la etiqueta modal porque no se renderiza el children, para solucionarlo se puede usar el children de la etiqueta <Modal> <h3>Modal-1</h3> <p>Aca va el contenido del modal</p> <img src="https://loremflickr.com/640/360" alt="cats" /> </Modal>
