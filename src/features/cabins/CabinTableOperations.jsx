import TableOpetations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';

function CabinTableOperations() {
  return (
    <TableOpetations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No disctount' },
          { value: 'with-discount', label: 'With disctount' },
        ]}></Filter>
    </TableOpetations>
  );
}

export default CabinTableOperations;
