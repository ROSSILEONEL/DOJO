import { Modal } from "./Modal";
import {useModal} from "../hooks/useModal";
import { ContactForm } from "./ContactForm";
// import {SongSearch} from "./SongSearch";
import { ModalPortal } from "./ModalPortal";



export const Modals = () => {

const [isOpenModal1,openModal,closeModal] = useModal(false)
const [isOpenPortal,openModalPortal,closeModalPortal] = useModal(false)
const [contactState,openContact,closeContact] = useModal(false)
const [songState,openSong,closeSong] = useModal(false)

console.log('isOpenModal1',isOpenModal1);
  return (
    <div>
      <h2> Modals</h2>
      <button onClick={()=>openModal()}> Modal 1</button>
      <Modal isOpenModal={isOpenModal1} closeModal={closeModal}  >
        <h3>Modal-1</h3>
        <p>{JSON.stringify(isOpenModal1)}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aspernatur, esse nihil, perferendis illo perspiciatis, tempore corrupti laboriosam aperiam necessitatibus sapiente consequuntur architecto velit voluptates eos et hic exercitationem assumenda?</p>
        <img src="https://loremflickr.com/640/360" alt="cats" />
      </Modal>

      <button onClick={()=>openContact()}>Contact Modal</button>
      <Modal isOpenModal={contactState} closeModal={closeContact}  >
        <h3>Modal-1</h3>
        <p>{JSON.stringify(isOpenModal1)}</p>
      <ContactForm/>
      </Modal>
     
     
      <button onClick={()=>openSong()}>Song Modal</button>
      <Modal isOpenModal={songState} closeModal={closeSong}  >
        <h3>Modal-1</h3>
        <p>{JSON.stringify(isOpenModal1)}</p>
      {/* <SongSearch/> */}
      </Modal>
     
     
      <button onClick={()=>openModalPortal()}>PORTAL A LO DOCTOR EXTRAÑO</button>
     
      <ModalPortal isOpenModal={isOpenPortal} closeModal={closeModalPortal}  >
        <h3>ESTE MODAL ES CON PORTAL</h3>
        <p>{JSON.stringify(isOpenPortal)}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eaque tenetur dicta neque veniam assumenda aliquam eligendi, quia officia incidunt alias reprehenderit obcaecati libero amet dolorum accusamus cupiditate fugit veritatis?</p>
      <img src="https://loremflickr.com/640/360" alt="cats" />
      {/* <SongSearch/> */}
      </ModalPortal>
    </div>
  );
};
