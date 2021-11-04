import './style.css';

const ClearButton = props => {
  return (
    <button
      className="clear-button"
      data-element="button"
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default ClearButton;