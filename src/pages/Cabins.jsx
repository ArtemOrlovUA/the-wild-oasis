import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import CabinTableOperations from '../features/cabins/CabinTableOperations';
import AddCabin from '../features/cabins/AddCabin';

function Cabins() {
  return (
    <>
      <Row type="hor">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row type="col">
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
