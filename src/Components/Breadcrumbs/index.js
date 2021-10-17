import './style.css';

const Breadcrumbs = () => {
  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item">
        <a href="index.html">
          <img src="images/home.svg" alt="Home" />
        </a>
      </li>
      <li className="breadcrumbs__item">
        <a href="index.html">eCommerce</a>
      </li>
      <li className="breadcrumbs__item breadcrumbs__item_current">Electronics</li>
    </ul>
  )
}

export default Breadcrumbs;