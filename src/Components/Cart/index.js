import { useDispatch, useSelector } from 'react-redux';
import { actionClearCart } from '../../features/products/actions';
import { selectProducts } from '../../features/products/selectors';
import ClearButton from '../ClearButton';
import CartItem from '../CartItem';
import './style.css';
import { useState } from 'react';

const Cart = () => {
  const cartlist = useSelector(selectProducts("cart"));
  const amount = cartlist.reduce((sum, product) => (sum + product.quantity * product.price), 0)
  const [totalAmount, setTotalAmount] = useState(amount);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(actionClearCart());
    setTotalAmount(0);
  }

  const countTotalPrice = price => {
    setTotalAmount(totalAmount + price);
  }

  return (
    <>
      {cartlist.length
        ? <>
          <div className="button-wrapper">
            <ClearButton onClick={clearCart}>Clear Cart</ClearButton>
          </div>
          <div className="cart">
            {cartlist && cartlist.map(product => (
              <CartItem key={product.id} product={product} countTotalPrice={countTotalPrice} />
            ))}
          </div>
          <div>Total: {totalAmount}</div>
        </>
        : <h2>No products in cart</h2>
      }
    </>
  )
}

export default Cart;