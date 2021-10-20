import { useSelector, useDispatch } from 'react-redux';
import { actionChangePage } from '../../features/pages/actions';
import { selectedPages } from '../../features/pages/selectors';
import './style.css';

const Pagination = () => {
  const { totalPages, start, viewPages, currentPage } = useSelector(selectedPages);
  const dispatch = useDispatch();
  const handlePointerDown = event => {
    if (event.target.classList.contains('pagination__link')) {
      if (event.target.parentElement.dataset.element === 'prevPage') {
        dispatch(actionChangePage(currentPage - 1));
      } else if (event.target.parentElement.dataset.element === 'nextPage') {
        dispatch(actionChangePage(currentPage + 1));
      }
      if (event.target.className === 'pagination__link') {
        dispatch(actionChangePage(+event.target.dataset.index));
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