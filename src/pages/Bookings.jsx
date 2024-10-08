import Heading from '../ui/Heading';
import Row from '../ui/Row';
import BookingsTable from '../features/bookings/BookingTable';
import BookingTableOperations from '../features/bookings/BookingTableOperations';

function Bookings() {
  return (
    <>
      <Row type="hor">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingsTable />
    </>
  );
}

export default Bookings;
