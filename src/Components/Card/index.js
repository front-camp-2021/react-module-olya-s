import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionChangeWishlistStatus, actionAddToCart } from '../../features/products/actions';
import './style.css';

const Card = props => {
  const { id, images, rating, price, title, text, inWishlist, quantity } = props.product;

  const dispatch = useDispatch();
  const history = useHistory();

  const addToWishlist = () => {
    dispatch(actionChangeWishlistStatus(id));
  }
  const addToCart = () => {
    dispatch(actionAddToCart(id));
  }

  const goToProductPage = () => {
    history.push(`/products/${id}`);
  }

  return (
    <div className="card">
      <div onClick={goToProductPage}>
        <div className="card__image">
          <img src={images && images[0]} alt="product" />
        </div>
        <div className="card__body">
          <div>
            <span className="card__rating">{rating}
              <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="star icon" />
            </span>
            <span className="card__price">{price}</span>
          </div>
          <h4 className="card__title">{title}</h4>
          <p className="card__text">{text}</p>
        </div>
      </div>
      <div className="card__footer">
        <button className="card__button card__button_wishlist" onClick={addToWishlist}>
          {inWishlist
            ? <img src={`${process.env.PUBLIC_URL}/images/heart_2.svg`} alt="in wishlist" />
            : <img src={`${process.env.PUBLIC_URL}/images/heart.svg`} alt="add to wishlist" />
          }
          Wishlist
        </button>
        <button className="card__button card__button_cart" onClick={addToCart}>
          <img src={`${process.env.PUBLIC_URL}/images/shopping-bag.svg`} alt="add to cart" />
          Add to cart
          {!!quantity && ` (${quantity})`}
        </button>
      </div>
    </div >
  )
}

export default Card;