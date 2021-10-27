import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../Breadcrumbs';
import FiltersList from '../FiltersList';
import ProductsList from '../ProductsList';
import Pagination from '../Pagination';
import { actionSetTotalPages } from '../../features/pages/actions';
import { selectProducts } from '../../features/products/selectors';
import { selectFilters } from '../../features/filters/selectors';
import { selectedPages } from '../../features/pages/selectors';
import './style.css';

const MainContainer = () => {
  const products = useSelector(selectProducts());
  const { filters, search } = useSelector(selectFilters);
  const pages = useSelector(selectedPages);
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(0);
  const pageSize = (windowWidth <= 635)
    ? 5 : (windowWidth <= 720)
      ? 6 : (windowWidth <= 990)
        ? 5 : (windowWidth <= 1200)
          ? 6 : 9;

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  const getProducts = () => {
    let productsSearch = [];
    let res = [];
    const checkedFilters = {
      category: filters.categories.filter(f => f.checked).map(f => f.title),
      brand: filters.brands.filter(f => f.checked).map(f => f.title)
    };
    const filteredProducts = products.filter(prod => (
      checkedFilters.category.find(title => title.toLowerCase() === prod.category) ||
      checkedFilters.brand.find(title => title.toLowerCase() === prod.brand)));
    const productsToView = filteredProducts.length ? filteredProducts.slice() : products.slice();
    if (!!search) {
      productsSearch = productsToView.filter(prod => prod.title.toLowerCase().includes(search));
    }
    res = productsSearch.length
      ? productsSearch.splice(pages.currentPage * pageSize - pageSize, pageSize)
      : productsToView.splice(pages.currentPage * pageSize - pageSize, pageSize);
    return { filteredProducts, res };
  }

  const memoizedCallback = useCallback(getProducts, [filters, pageSize, pages.currentPage, products, search]);

  useEffect(() => {
    const filteredProducts = memoizedCallback().filteredProducts;
    const productsToView = (filteredProducts.length && filteredProducts) || products;
    dispatch(actionSetTotalPages(Math.ceil((productsToView.length) / pageSize)));
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, [dispatch, memoizedCallback, pageSize, products]);

  const onSubmit = event => {
    event.preventDefault();
    const filteredProducts = getProducts();
    const productsToView = (filteredProducts.length && filteredProducts) || products;
    dispatch(actionSetTotalPages(Math.ceil((productsToView.length) / pageSize)));
  };

  // useEffect(() => {
  //   dispatch(actionSetTotalPages(Math.ceil((products.length) / pageSize)));
  //   resizeWindow();
  //   window.addEventListener("resize", resizeWindow);
  //   return () => window.removeEventListener("resize", resizeWindow);
  // }, [dispatch, products.length, pageSize]);

  // useEffect(() => {
  //   console.log("useEffect-2")
  //   const filteredProducts = memoizedCallback();
  //   const productsToView = (filteredProducts.length && filteredProducts) || products;
  //   dispatch(actionSetTotalPages(Math.ceil((productsToView.length) / pageSize)));
  // }, [dispatch, memoizedCallback, products, pageSize]);

  // const onSubmit = useCallback(event => {
  //   event.preventDefault();
  //   const filteredProducts = memoizedCallback();
  //   const productsToView = (filteredProducts.length && filteredProducts) || products;
  //   dispatch(actionSetTotalPages(Math.ceil((productsToView.length) / pageSize)));
  // }, [dispatch, memoizedCallback, products, pageSize]);

  return (
    <div className="main-container">
      <Breadcrumbs />
      <FiltersList onSubmit={onSubmit} />
      <ProductsList products={getProducts().res} />
      <Pagination />
    </div>)
}

export default MainContainer;