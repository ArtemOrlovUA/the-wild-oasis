import TableOpetations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

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

      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low to high)' },
          { value: 'regularPrice-desc', label: 'Sort by price (high to low)' },
          { value: 'maxCapacity-asc', label: 'Sort by capacity (low to high)' },
          { value: 'maxCapacity-desc', label: 'Sort by capacity (high to low)' },
        ]}
      />
    </TableOpetations>
  );
}

export default CabinTableOperations;
