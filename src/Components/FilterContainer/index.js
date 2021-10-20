import { useSelector, useDispatch } from 'react-redux';
import DoubleSlider from '../DoubleSlider';
import FiltersList from '../FiltersList';
import { selectFilters } from '../../features/filters/selectors';
import { actionChangeFilter, actionResetAllFilters } from '../../features/filters/actions';
import './style.css';

const FilterContainer = () => {
  const filters = useSelector(selectFilters).filters;
  const dispatch = useDispatch();

  const categoryFilter = filters.filter(filt => filt.value.split('=')[0] === 'category');
  const brandFilter = filters.filter(filt => filt.value.split('=')[0] === 'brand');

  const onSubmit = (event) => {
    event.preventDefault();
  }
  const clearAllFilters = () => {
    dispatch(actionResetAllFilters());
  }
  const changeFilters = event => {
    dispatch(actionChangeFilter(event.target.name));
  }

  return (
    <form onSubmit={onSubmit} className="filter-form">
      <h2 className="filter-form__title">Filters
        <button className="filter-form__submit-button" type="submit">&lt;&lt;</button>
      </h2>
      <div className="filter-form__list-wrapper">
        <div className="filters">
          <DoubleSlider />
          <hr />
          <FiltersList
            title="Category"
            filtersList={categoryFilter}
            changeFilters={changeFilters}
            filters={filters} />
          <hr />
          <FiltersList
            title="Brand"
            filtersList={brandFilter}
            changeFilters={changeFilters}
            filters={filters} />
        </div>
      </div>
      <button
        className="filter-form__clear-button"
        data-element="button"
        onClick={clearAllFilters}>Clear all filters</button>
    </form>
  )
}

export default FilterContainer;