import FilterItem from '../FilterItem';
import './style.css';

const FiltersGroup = (props) => {
  return (
    <fieldset>
      <legend className="filters__group">{props.title}</legend>
      <ul>
        {!!props.filtersGroup && props.filtersGroup.map((filter, index) => {
          return (
            <li key={index} className="filters__option filters__option_checkbox">
              <FilterItem
                filter={filter}
                changeFilter={props.changeFilter} />
              <span className="filters__count"></span>
            </li>
          )
        }
        )}
      </ul>
    </fieldset>
  )
}

export default FiltersGroup;