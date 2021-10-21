import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Search from '../Search';
import Card from '../Card';
import { selectProducts, selectWishfulProductsCount } from '../../features/products/selectors';
import { actionChangeSearch } from '../../features/filters/actions';
import './style.css';

const debounce = callback => {
  let timeout;
  return function (argument) {
    clearTimeout(timeout);
    timeout = setTimeout(callback, 1000, argument);
  }
}

const ProductContainer = () => {
  const products = useSelector(selectProducts());
  const wishlistCount = useSelector(selectWishfulProductsCount);
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = () => {
    history.push("/wishlist");
  }

  const onInput = (event) => {
    dispatch(actionChangeSearch(event.target.value.trim()));
  }

  const debouncedOnInput = debounce(onInput);

  return (
    <div>
      <section className="products">
        <h2 className="visually-hidden">Products catalog</h2>
        <div className="products__results">
          <p>7,618 results found</p>
          <button className="products__button-like" onClick={onClick}>
            {wishlistCount
              ? <img src="images/like_2.svg" alt="see wishlist" />
              : <img src="images/like.svg" alt="see wishlist" />
            }
          </button>
        </div>
        <Search onInput={onInput} debouncedOnInput={debouncedOnInput} />
        <div className="catalog">
          {products && products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductContainer;