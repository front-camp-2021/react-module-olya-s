const FilterItem = (props) => {
  const { title, checked } = props.filter;

  const handleChange = event => {
    props.changeFilter(event);
  }

  return (
    <div>
      <input
        type="checkbox"
        id={title}
        name={title}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  )
}

export default FilterItem;