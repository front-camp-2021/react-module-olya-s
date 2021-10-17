import React from 'react';
import './style.css';

class Card extends React.Component {
  addToWishlist = () => {
    console.log("wishlist");
  }
  addToCart = () => {
    console.log("cart");
  }
  render() {
    return (
      <div className="catalog__item card">
        <div className="card__image">
          <img src={this.props.product.images && this.props.product.images[0]} alt="product" />
        </div>
        <div className="card__body">
          <div>
            <span className="card__rating">{this.props.product.rating}
              <img src="images/star.svg" alt="star icon" />
            </span>
            <span className="card__price">{this.props.product.price}</span>
          </div>
          <h4 className="card__title">{this.props.product.title}</h4>
          <p className="card__text">{this.props.product.text}</p>
        </div>
        <div className="card__footer">
          <button className="card__button card__button_wishlist" onClick={this.addToWishlist}>
            <img src="images/heart.svg" alt="heart icon" />
            Wishlist
          </button>
          <button className="card__button card__button_cart" onClick={this.addToCart}>
            <img src="images/shopping-bag.svg" alt="cart icon" />
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

export default Card;