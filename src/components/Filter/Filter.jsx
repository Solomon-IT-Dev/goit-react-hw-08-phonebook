import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { changeFilter } from 'redux/filter/filter-slice';
import { getFilterValue } from 'redux/filter/filter-selectors';
import { FilterWrapper, FilterInputLabel, FilterInput } from './Filter.styled';

export default function Filter() {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filterInputId = nanoid();

  const onFilterChange = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <FilterInputLabel htmlFor={filterInputId}>
        Find contacts by name
        <FilterInput
          type="text"
          placeholder="Search field"
          id={filterInputId}
          value={filterValue}
          onChange={onFilterChange}
        />
      </FilterInputLabel>
    </FilterWrapper>
  );
}
