import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionRemoveFromCart } from '../../features/products/actions';
import './style.css';

const CartItem = props => {
  const { id, images, price, title, text } = props.product;
  const [quantity, setQuantity] = useState(props.product.quantity);
  const dispatch = useDispatch();

  const minusOne = () => {
    setQuantity(quantity - 1);
    props.countTotalPrice(-price);
    if (quantity === 1) {
      dispatch(actionRemoveFromCart(id));
    }
  }
  const plusOne = () => {
    setQuantity(quantity + 1);
    props.countTotalPrice(price);
  }

  return (
    <div className="card-in-cart">
      <div key={id} className="purchase">
        <div className="purchase__image">
          <img src={images && images[0]} alt="product" />
        </div>
        <div className="purchase__body">
          <h4 className="purchase__title">{title}</h4>
          <p className="purchase__text">{text}</p>
        </div>
        <div className="purchase__amount">
          <span className="purchase__price">Price: {price}</span>
          <div className="purchase__count">
            <button onClick={minusOne} disabled={!quantity}>-</button>
            <button disabled>{quantity}</button>
            <button onClick={plusOne}>+</button>
          </div>
          <span className="purchase__total">Total: {quantity * price}</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem;