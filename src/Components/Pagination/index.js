import { useState } from 'react';
import './style.css';

const props = {
  totalPages: 20,
  start: 1,
  currentPage: 1,
  viewPages: 9
}

const Pagination = () => {
  const { totalPages, start, viewPages } = props;
  const [currentPage, setCurrentPage] = useState(props.currentPage);
  const handlePointerDown = event => {
    if (event.target.classList.contains('pagination__link')) {
      if (event.target.parentElement.dataset.element === 'prevPage') {
        const newPageIndex = currentPage - 1;
        setCurrentPage(newPageIndex);
      } else if (event.target.parentElement.dataset.element === 'nextPage') {
        const newPageIndex = currentPage + 1;
        setCurrentPage(newPageIndex);
      }
      if (event.target.className === 'pagination__link') {
        const newPageIndex = +event.target.dataset.index;
        setCurrentPage(newPageIndex);
      }
    }
  }

  const getPages = () => {
    const pages = [];
    if (currentPage < start + 5) {
      for (let i = start; i < viewPages - 1; i++) {
        if (currentPage === i) {
          pages[i] = <li key={i}
            className="pagination__item pagination__item_current"
            data-index={i}>{i}
          </li>;
        } else {
          pages[i] = <li
            key={i}
            className="pagination__item">
            <button
              className="pagination__link"
              data-index={i}>{i}
            </button>
          </li>;
        }
      }
      pages[start + 7] = <li key={start + 7}
        className="pagination__item">
        <button
          className="pagination__link"
          data-index={start + 7}>...
        </button>
      </li>;
      pages[viewPages] = <li key={totalPages}
        className="pagination__item">
        <button
          className="pagination__link"
          data-index={totalPages}>{totalPages}
        </button>
      </li>;
    } else if (currentPage > totalPages - 5) {
      for (let i = totalPages; i > totalPages - viewPages + 1; i--) {
        if (currentPage === i) {
          pages[i] = <li key={i}
            className="pagination__item pagination__item_current"
            data-index={i}>{i}
          </li>;
        } else {
          pages[i] = <li key={i}
            className="pagination__item">
            <button
              className="pagination__link"
              data-index={i}>{i}
            </button>
          </li>;
        }
      }
      pages[totalPages - viewPages + 2] = <li
        key={totalPages - viewPages + 2}
        className="pagination__item">
        <button
          className="pagination__link"
          data-index={totalPages - viewPages + 2}>...
        </button>
      </li>;
      pages[start] = <li key={start}
        className="pagination__item">
        <button
          className="pagination__link"
          data-index={start}>{start}
        </button>
      </li>;
    } else {
      pages[start] = <li key={start}
        className="pagination__item">
        <button
          className="pagination__link"
          data-index={start}>{start}
        </button>
      </li>;
      pages[currentPage - 3] = <li key={currentPage - 3}
        className="pagination__item">
        <button
          className="pagination__link"
          data-index={currentPage - 3}>...
        </button>
      </li>;
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (currentPage === i) {
          pages[i] = <li key={i}
            className="pagination__item pagination__item_current"
            data-index={i}>{i}
          </li>;
        } else {
          pages[i] = <li key={i}
            className="pagination__item">
            <button
              className="pagination__link"
              data-index={i}>{i}
            </button>
          </li>;
        }
      }
      pages[totalPages] = <li key={totalPages}
        className="pagination__item">
        <button
          className="pagination__link"
          data-index={totalPages}>{totalPages}
        </button>
      </li>;
      pages[currentPage + 3] = <li key={currentPage + 3}
        className="pagination__item">
        <button
          className="pagination__link"
          data-index={currentPage + 3}>...
        </button>
      </li>;
    }
    return pages;
  }

  return (
    <div className="pagination" onPointerDown={handlePointerDown}>
      <span className="pagination__item" data-element="prevPage">
        {currentPage === 1 ? '<' :
          <button className="pagination__link pagination__link_arrow">&lt;</button>}
      </span>
      <ul className="pagination__list">
        {getPages()}
      </ul>
      <span className="pagination__item" data-element="nextPage">
        {currentPage === totalPages ? '>' :
          <button className="pagination__link pagination__link_arrow">&gt;</button>}
      </span>
    </div>
  )
}

export default Pagination;