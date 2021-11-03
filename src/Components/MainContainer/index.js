import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../Breadcrumbs';
import FiltersList from '../FiltersList';
import ProductsList from '../ProductsList';
import Pagination from '../Pagination';
import { actionSetTotalPages } from '../../features/pages/actions';
import { selectProducts } from '../../features/products/selectors';
import { selectFilters } from '../../features/filters/selectors';
import { selectPages } from '../../features/pages/selectors';
import './style.css';

const MainContainer = () => {
  const products = useSelector(selectProducts());
  const { filters, search } = useSelector(selectFilters);
  const pages = useSelector(selectPages);
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(0);
  const pageSize = ((windowWidth <= 635) || (windowWidth > 720 && windowWidth <= 990)) ? 5 :
    (windowWidth > 1200) ? 9 : 6;

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  const getProducts = () => {
    let productsSearch = [];
    let res = [];
    let categoryProducts = [];
    let brandProducts = [];
    let filteredProducts = [];
    const checkedFilters = {
      category: filters.categories.filter(f => f.checked).map(f => f.title),
      brand: filters.brands.filter(f => f.checked).map(f => f.title)
    };
    if (!checkedFilters.category.length && !checkedFilters.brand.length) {
      filteredProducts = products.slice();
    } else {
      if (checkedFilters.category.length) {
        categoryProducts = products.filter(prod => (
          checkedFilters.category.find(title => title.toLowerCase() === prod.category.split('_').join(' '))
        ));
      }
      if (checkedFilters.brand.length) {
        brandProducts = products.filter(prod => (
          checkedFilters.brand.find(title => title.toLowerCase() === prod.brand.split('_').join(' '))
        ));
      }
      if (categoryProducts.length && brandProducts.length) {
        filteredProducts = categoryProducts.filter(prodCategory => {
          const products = brandProducts.filter(prodBrand => {
            return prodCategory.id === prodBrand.id
          })
          return products.length;
        });
      } else if (categoryProducts.length && !checkedFilters.brand.length) {
        filteredProducts = categoryProducts.slice();
      } else if (brandProducts.length && !checkedFilters.category.length) {
        filteredProducts = brandProducts.slice();
      }
    }
    if (!!search) {
      productsSearch = filteredProducts.filter(prod => prod.title.toLowerCase().includes(search));
    }
    let productsToView = filteredProducts.slice();
    res = productsSearch.length
      ? productsSearch.splice(pages.currentPage * pageSize - pageSize, pageSize)
      : productsToView.splice(pages.currentPage * pageSize - pageSize, pageSize);
    return { filteredProducts, res };
  }

  const memoizedCallback = useCallback(getProducts, [filters, pageSize, pages.currentPage, products, search]);

  useEffect(() => {
    const filteredProducts = memoizedCallback().filteredProducts;
    dispatch(actionSetTotalPages(Math.ceil((filteredProducts.length) / pageSize)));
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, [dispatch, memoizedCallback, pageSize, products]);

  const onSubmit = event => {
    event.preventDefault();
    const filteredProducts = getProducts();
    dispatch(actionSetTotalPages(Math.ceil((filteredProducts.length) / pageSize)));
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