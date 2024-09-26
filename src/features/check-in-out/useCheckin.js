import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateBooking } from '../../services/apiBookings';
import { useNavigate } from 'react-router-dom';

export function useCheckin() {
  const queryClient = useQueryClient();
  const navifgate = useNavigate();

  const { mutate: checkin, isLoading: isChekingin } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, { status: 'checked-in', isPaid: true, ...breakfast }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} checked-in successfully`);
      queryClient.invalidateQueries({
        active: true,
      });
      navifgate('/bookings');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { checkin, isChekingin };
}
