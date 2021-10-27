import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actionGetProduct } from '../../features/products/actions';
import { selectProducts } from '../../features/products/selectors';
import Card from '../Card';

const ProductPage = props => {
  const products = useSelector(selectProducts());
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = products.find(product => product.id === productId);

  useEffect(() => {
    if (productId && !product) {
      dispatch(actionGetProduct(productId));
    }
  }, [dispatch, product, productId]);

  return (
    <>
      {/* {!!Object.keys(product).length
        ? <Card product={product} />
        : <Redirect to="/not-found" />} */}
      {product && !!Object.keys(product).length && <Card product={product} />}
    </>
  )
}

export default ProductPage;