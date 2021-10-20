import { useSelector, useDispatch } from 'react-redux';
import Search from '../Search';
import Card from '../Card';
import { selectProducts } from '../../features/products/selectors';
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
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const onInput = (event) => {
    dispatch(actionChangeSearch(event.target.value.trim()));
  }

  const debouncedOnInput = debounce(onInput);

  return (
    <div>
      <section>
        <h2 className="visually-hidden">Products catalog</h2>
        <Search onInput={onInput} debouncedOnInput={debouncedOnInput} />
        <div className="catalog">
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductContainer;