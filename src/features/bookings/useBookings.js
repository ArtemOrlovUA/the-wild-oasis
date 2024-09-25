import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../../utils/constants';

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get('status') || 'all';
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue, method: 'eq' };

  // SORT
  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  // PAGINATION
  const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  // QUERY
  const { isLoading, data, error } = useQuery({
    queryKey: ['bookings', filter, sortBy, currentPage],
    queryFn: () => getBookings({ filter, sortBy, currentPage }),
  });

  const bookings = data?.data || [];
  const count = data?.count || 0;

  // PRE-FETCHING
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  if (currentPage < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, currentPage + 1],
      queryFn: () => getBookings({ filter, sortBy, currentPage: currentPage + 1 }),
    });

  if (currentPage > 1)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, currentPage - 1],
      queryFn: () => getBookings({ filter, sortBy, currentPage: currentPage - 1 }),
    });

  return { isLoading, bookings, error, count };
}
