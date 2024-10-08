import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';
import { useSearchParams } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Stats({ recentBooking, confirmedStays, cabinsCount }) {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get('last') ? 7 : Number(searchParams.get('last'));

  const numBookings = recentBooking?.length;

  const numSales = recentBooking?.reduce((acc, booking) => acc + booking.totalPrice, 0);

  const checkIns = confirmedStays?.length;

  const occupancyRate =
    (confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (cabinsCount * numDays)) * 100;

  return (
    <>
      <Stat icon={<HiOutlineBriefcase />} title="Bookings" value={numBookings} color="blue" />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(numSales)}
        color="green"
      />
      <Stat icon={<HiOutlineCalendarDays />} title="Check ins" value={checkIns} color="indigo" />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        value={`${Math.round(occupancyRate)}%`}
        color="yellow"
      />
    </>
  );
}

export default Stats;
