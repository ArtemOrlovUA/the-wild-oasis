import styled from 'styled-components';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import CheckoutButton from '../check-in-out/CheckoutButton';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from './useBooking';
import Spinner from '../../ui/Spinner';
import { useNavigate } from 'react-router-dom';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteBooking } from './useDeleteBooking';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { deleteBooking, isDeletingBooking } = useDeleteBooking();

  const navigate = useNavigate();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  const { status, id: bookingId } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking №{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Modal>
        <ButtonGroup>
          {status === 'unconfirmed' && (
            <Button onClick={() => navigate(`/checkin/${bookingId}`)}>Check in</Button>
          )}
          <Modal.Open opens={'delete'}>
            <Button variation="danger" onClick={() => navigate(`/checkin/${bookingId}`)}>
              Delete booking
            </Button>
          </Modal.Open>

          {status === 'checked-in' && <CheckoutButton />}
          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </ButtonGroup>

        <Modal.Window name={'delete'}>
          <ConfirmDelete
            resourceName={`booking №${bookingId}`}
            onConfirm={() => {
              deleteBooking(bookingId);
              navigate(-1);
            }}
            disabled={isDeletingBooking}></ConfirmDelete>
        </Modal.Window>
      </Modal>
    </>
  );
}

export default BookingDetail;
