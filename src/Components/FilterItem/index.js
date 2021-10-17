const FilterItem = (props) => {
  const { filter, changeFilters } = props;
  const value = filter.value.split('=')[1];
  const title = filter.title;
  const handleChange = event => {
    changeFilters(event);
  }
  return (
    <div>
      <input
        type="checkbox"
        id={value}
        name={value}
        onChange={handleChange}
        checked={props.filters && props.filters[value]}
      />
      <label htmlFor={value}>{title}</label>
    </div>
  )
}

export default FilterItem;