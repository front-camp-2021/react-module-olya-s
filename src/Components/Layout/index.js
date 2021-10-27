import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetProducts } from '../../features/products/actions';
import { selectProducts } from '../../features/products/selectors';
import { actionSetFilters } from '../../features/filters/actions';
import { actionSetTotalPages } from '../../features/pages/actions';
import Header from '../Header';

const Layout = props => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts());
  const [windowWidth] = useState(0);
  const pageSize = (windowWidth <= 635)
    ? 5 : (windowWidth <= 720)
      ? 6 : (windowWidth <= 990)
        ? 5 : (windowWidth <= 1200)
          ? 6 : 9;

  useEffect(() => {
    dispatch(actionGetProducts());
    dispatch(actionSetFilters());
    dispatch(actionSetTotalPages(Math.ceil((products.length) / pageSize)));
  }, [dispatch, products.length, pageSize]);

  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout;