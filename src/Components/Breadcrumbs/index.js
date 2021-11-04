import { Link } from 'react-router-dom';
import './style.css';

const Breadcrumbs = () => {
  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item">
        <Link to="/">
          <img src="images/home.svg" alt="Home" />
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <Link to="/ecommerce">eCommerce</Link>
      </li>
      <li className="breadcrumbs__item breadcrumbs__item_current">Electronics</li>
    </ul>
  )
}

export default Breadcrumbs;