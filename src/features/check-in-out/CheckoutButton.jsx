/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import Button from '../../ui/Button';
import { useCheckout } from './useCheckout';

function CheckoutButton() {
  const { checkout, isCheckingout } = useCheckout();

  const { bookingId } = useParams();

  return (
    <Button
      variation="primary"
      size="small"
      disabled={isCheckingout}
      onClick={() => checkout(bookingId)}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
