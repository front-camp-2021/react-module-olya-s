import './style.css';
import { useState } from 'react';
import DoubleSlider from '../DoubleSlider';
import FiltersList from '../FiltersList';

const categoryFilterConfig = [
  {
    value: 'category=cell_phones',
    title: 'Cell Phones',
  },
  {
    value: 'category=computer_tablets',
    title: 'Computers & Tablets',
  },
  {
    value: 'category=cell_phones_accessories',
    title: 'Cell Phone Accessories',
  },
  {
    value: 'category=appliances',
    title: 'Appliances',
  },
  {
    value: 'category=audio',
    title: 'Audio',
  }
];

const brandFilterConfig = [
  {
    value: 'brand=insigni',
    title: 'Insigni',
  },
  {
    value: 'brand=samsung',
    title: 'Samsung',
  },
  {
    value: 'brand=apple',
    title: 'Apple',
  }
];

const FilterContainer = () => {
  const filtersNames = [...categoryFilterConfig, ...brandFilterConfig]
    .map(filter => (filter.value.split('=')[1]));
  const allFilters = filtersNames.reduce((acc, cur) => {
    acc[cur] = false;
    return acc;
  }, {});
  const [filters, setFilters] = useState(allFilters);

  const onSubmit = (event) => {
    event.preventDefault();
  }
  const clearAllFilters = () => {
    setFilters(allFilters);
  }
  const changeFilters = event => {
    const name = event.target.name;
    setFilters(prev => ({
      ...prev,
      [name]: event.target.checked
    }));
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
            filtersList={categoryFilterConfig}
            changeFilters={changeFilters}
            filters={filters} />
          <hr />
          <FiltersList
            title="Brand"
            filtersList={brandFilterConfig}
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