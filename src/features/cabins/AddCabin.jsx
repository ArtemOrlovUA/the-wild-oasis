import { useContext, useState } from 'react';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens={'form'}>
        <Button>Add cabin</Button>
      </Modal.Open>
      <Modal.Window name={'form'}>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   function closeModal() {
//     setIsOpenModal(false);
//   }

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal(!isOpenModal)}>
//         {isOpenModal ? 'Hide form' : 'Add cabin'}
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={closeModal}>
//           <CreateCabinForm onCloseModal={closeModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
