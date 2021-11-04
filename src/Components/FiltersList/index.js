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

const FiltersList = () => {
  const filters = useSelector(selectFilters).filters;
  const range = useSelector(selectFilters).range;
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
    <div className="filter-form">
      <h2 className="filter-form__title">Filters
        <button className="filter-form__submit-button" type="text">&lt;&lt;</button>
      </h2>
      <div className="filter-form__list-wrapper">
        {!!filters
          ? <div className="filters">
            {!!range && <DoubleSlider />}
            {!!categoryFilter.length &&
              <>
                <hr />
                <FiltersGroup
                  title="Category"
                  filtersGroup={categoryFilter}
                  changeFilter={changeCategoryFilter} />
              </>
            }
            {!!brandFilter.length &&
              <>
                <hr />
                <FiltersGroup
                  title="Brand"
                  filtersGroup={brandFilter}
                  changeFilter={changeBrandFilter} />
              </>
            }
          </div>
          : <div>No Filters to show</div>
        }
      </div>
      <ClearButton onClick={clearAllFilters}>
        Clear all filters
      </ClearButton>
    </div>
  )
}

export default FiltersList;