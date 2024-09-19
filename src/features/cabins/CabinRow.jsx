/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { formatCurrency } from '../../utils/helpers';
import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import { useCreateCabin } from './useCreateCabin';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { id: cabinId, name, maxCapacity, regularPrice, discount, image, description } = cabin;
  const [showForm, setShowForm] = useState(false);

  const { isDeleting, deleteCabin } = useDeleteCabin();

  const { createCabin, isCreating } = useCreateCabin();

  function handleDuplicate() {
    console.log('hi');
    createCabin({
      name: `${name} (copy)`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <TableRow role="row">
        <img src={image} alt={name} />
        <Cabin>{name}</Cabin>
        <div>{maxCapacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Price>{formatCurrency(discount)}</Price>
        <div>
          <button
            onClick={() => {
              handleDuplicate();
            }}
            disabled={isDeleting || isCreating}>
            Duplicate
          </button>
          <Modal>
            <Modal.Open opens={'edit'}>
              <button onClick={() => setShowForm((showForm) => !showForm)} disabled={isDeleting}>
                Edit
              </button>
            </Modal.Open>
            <Modal.Window name={'edit'}>
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>
          </Modal>
          <Modal>
            <Modal.Open opens={'delete'}>
              <button>Delete</button>
            </Modal.Open>
            <Modal.Window name={'delete'}>
              <ConfirmDelete
                resourceName={name}
                onConfirm={() => deleteCabin(cabinId)}
                disabled={isDeleting}></ConfirmDelete>
            </Modal.Window>
          </Modal>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
