import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionChangeSearch } from '../../features/filters/actions';
import './style.css';

const Search = (props, ref) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onChange = event => setValue(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    dispatch(actionChangeSearch(value.trim()));
    setValue('');
  }

  return (
    <form className="search" onSubmit={onSubmit}>
      <div className="search__results">
        <p>7,618 results found</p>
        <button className="search__button-like">
          <img src="images/like.svg" alt="heart icon" />
        </button>
      </div>
      <label htmlFor="search-input" hidden>Search</label>
      <input value={value} onChange={onChange} onInput={props.debouncedOnInput}
        className="search__input" id="search-input" type="text" placeholder="Search" />
      <button className="search__image" type="submit">
        <img src="images/search.svg" alt="search icon" />
      </button>
    </form>
  )
}

export default Search;