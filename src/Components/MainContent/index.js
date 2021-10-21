import Breadcrumbs from '../Breadcrumbs';
import FilterContainer from '../FilterContainer';
import ProductContainer from '../ProductContainer';
import Pagination from '../Pagination';
import './style.css';

const MainContent = () => {
  return (
    <div className="main-container">
      <Breadcrumbs />
      <FilterContainer />
      <ProductContainer />
      <Pagination />
    </div>)
}

export default MainContent;