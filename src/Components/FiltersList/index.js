import { useSelector, useDispatch } from 'react-redux';
import DoubleSlider from '../DoubleSlider';
import FiltersGroup from '../FiltersGroup';
import ClearButton from '../ClearButton';
import { selectFilters } from '../../features/filters/selectors';
import {
  actionChangeCategoryFilter,
  actionChangeBrandFilter,
  actionResetAllFilters
} from '../../features/filters/actions';
import './style.css';
import { actionChangePage } from '../../features/pages/actions';

const FiltersList = props => {
  const filters = useSelector(selectFilters).filters;
  const dispatch = useDispatch();

  const categoryFilter = !!filters && filters.categories;
  const brandFilter = !!filters && filters.brands;

  const clearAllFilters = () => {
    dispatch(actionResetAllFilters());
  }
  const changeCategoryFilter = event => {
    dispatch(actionChangePage(1));
    dispatch(actionChangeCategoryFilter(event.target.name));
  }
  const changeBrandFilter = event => {
    dispatch(actionChangePage(1));
    dispatch(actionChangeBrandFilter(event.target.name));
  }

  return (
    <form onSubmit={props.onSubmit} className="filter-form">
      <h2 className="filter-form__title">Filters
        <button className="filter-form__submit-button" type="submit">&lt;&lt;</button>
      </h2>
      <div className="filter-form__list-wrapper">
        <div className="filters">
          <DoubleSlider />
          <hr />
          <FiltersGroup
            title="Category"
            filtersGroup={categoryFilter}
            changeFilter={changeCategoryFilter} />
          <hr />
          <FiltersGroup
            title="Brand"
            filtersGroup={brandFilter}
            changeFilter={changeBrandFilter} />
        </div>
      </div>
      <ClearButton onClick={clearAllFilters}>
        Clear all filters
      </ClearButton>
    </form>
  )
}

export default FiltersList;