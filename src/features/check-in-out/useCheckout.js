import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateBooking } from '../../services/apiBookings';
import { useNavigate, useParams } from 'react-router-dom';

export function useCheckout() {
  const queryClient = useQueryClient();
  const navifgate = useNavigate();

  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    mutationFn: (bookingId) => updateBooking(bookingId, { status: 'checked-out' }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} checked-out successfully`);
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { checkout, isCheckingout };
}
