import React, { memo } from "react";

import { FilterInput, FilterLabel } from "./Filter.styled";
interface IFilter {
  onChangeFilterValue: (e: string) => void;
}
const Filter = ({ onChangeFilterValue }: IFilter) => {
  console.log("peremalyovka filter value");
  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <FilterInput
        type="input"
        minLength={0}
        debounceTimeout={400}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeFilterValue(e.target.value)
        }
      />
    </FilterLabel>
  );
};


export default memo(Filter);
