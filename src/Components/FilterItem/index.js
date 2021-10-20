const FilterItem = (props) => {
  const { filter, changeFilters } = props;
  const { value, title, checked } = filter;
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
        checked={checked}
      />
      <label htmlFor={value}>{title}</label>
    </div>
  )
}

export default FilterItem;