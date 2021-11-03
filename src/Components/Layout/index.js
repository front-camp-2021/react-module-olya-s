import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionGetProducts } from '../../features/products/actions';
import { actionSetFilters } from '../../features/filters/actions';
import Header from '../Header';

const Layout = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetProducts());
    dispatch(actionSetFilters());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout;