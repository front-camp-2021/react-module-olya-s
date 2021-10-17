import './App.css';
import Header from './Components/Header';
import Breadcrumbs from './Components/Breadcrumbs';
import FilterContainer from './Components/FilterContainer';
import ProductContainer from './Components/ProductContainer';
import Pagination from './Components/Pagination';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Breadcrumbs />
        <FilterContainer />
        <ProductContainer />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
