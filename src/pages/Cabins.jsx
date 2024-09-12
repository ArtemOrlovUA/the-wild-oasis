import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import { useState } from 'react';
import Button from '../ui/Button';

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="hor">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/sort</p>
      </Row>

      <Row type="col">
        <CabinTable />
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide form' : 'Add cabin'}
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
