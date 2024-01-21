import React, { memo } from 'react';

import { FilterInput, FilterLabel } from './FIlter.styled';

const Filter = ({ onChangeFilterValue }) => {
  console.log('peremalyovka filter value');
  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <FilterInput
        type="input"
        name="filter"
        minLength={0}
        debounceTimeout={400}
        onChange={e => onChangeFilterValue(e.target.value)}
      />
    </FilterLabel>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChangeFilterValue: PropTypes.func.isRequired,
// };

// export default memo(Filter);
export default memo(Filter);
