import './style.css';
import FilterItem from '../FilterItem';

const FiltersList = (props) => {
  return (
    <fieldset>
      <legend className="filters__group">{props.title}</legend>
      <ul>
        {props.filtersList.map((filter, index) => {
          return (
            <li key={index} className="filters__option filters__option_checkbox">
              <FilterItem
                filter={filter}
                changeFilters={props.changeFilters}
                filters={props.filters} />
              <span className="filters__count"></span>
            </li>
          )
        }
        )}
      </ul>
    </fieldset>
  )
}

export default FiltersList;