import { useDispatch, useSelector } from 'react-redux';
import { actionClearWishlist } from '../../features/products/actions';
import { selectProducts } from '../../features/products/selectors';
import ClearButton from '../ClearButton';
import Card from '../Card';
import './style.css';

const Wishlist = props => {
  const wishlist = useSelector(selectProducts("wishlist"));
  const dispatch = useDispatch();

  const clearWishlist = () => {
    dispatch(actionClearWishlist());
  }

  return (
    <>
      {wishlist.length
        ? <div className="button-wrapper">
          <ClearButton onClick={clearWishlist}>Clear Wishlist</ClearButton>
        </div>
        : <h2>No wishful products</h2>
      }

      <div className="catalog">
        {wishlist && wishlist.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Wishlist;