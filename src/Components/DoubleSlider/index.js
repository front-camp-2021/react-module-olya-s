import React from 'react';
import './style.css';

class DoubleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 100,
      max: 200,
      title: 'Price',
      selected: {
        from: 150,
        to: 175
      },
      className: 'range-slider',
      slider: null,
      shiftX: 0,
      outLeftX: 0,
      outRightX: 0,
      thumbLeftX: 0,
      thumbRightX: 0,
      subElements: {},
      move: null
    };
    this.progress = React.createRef();
    this.thumbRight = React.createRef();
    this.thumbLeft = React.createRef();
  }

  handlePointerDown = (event) => {
    const element = event.target.parentElement.parentElement;
    if (element.className === 'range-slider__thumb-left' ||
      element.className === 'range-slider__thumb-right') {
      this.setState((state) => ({
        className: 'range-slider range-slider_dragging',
        slider: element,
        outLeftX: this.progress.current.getBoundingClientRect().left,
        outRightX: this.progress.current.getBoundingClientRect().right,
        thumbLeftX: this.thumbLeft.current.getBoundingClientRect().right,
        thumbRightX: this.thumbRight.current.getBoundingClientRect().left
      }));

      if (element.className === 'range-slider__thumb-left') {
        this.setState((state) => (
          { shiftX: event.pageX - element.getBoundingClientRect().right }
        ));
      } else {
        this.setState((state) => (
          { shiftX: event.pageX - element.getBoundingClientRect().left }
        ));
      }
      element.style.zIndex = 1000;
      this.setState((state) => ({ move: this.handlePointerMove }));
    }
  };

  handlePointerMove = (event) => {
    if (this.state.slider === this.thumbLeft.current) {
      let posX = event.pageX - this.state.shiftX;
      if (posX < this.state.outLeftX) {
        posX = this.state.outLeftX;
      } else if (posX > this.state.thumbRightX) {
        posX = this.state.thumbRightX;
      }
      this.setState((state) => ({
        selected: {
          ...this.state.selected,
          from: (this.state.min +
            this.getValueInPercent(posX - this.state.outLeftX) *
            (this.state.max - this.state.min) / 100)
        }
      }));
    }
    if (this.state.slider === this.thumbRight.current) {
      let posX = event.pageX - this.state.shiftX;
      if (posX < this.state.thumbLeftX) {
        posX = this.state.thumbLeftX;
      } else if (posX > this.state.outRightX) {
        posX = this.state.outRightX;
      }
      this.setState((state) => ({
        selected: {
          ...this.state.selected,
          to: this.state.max -
            this.getValueInPercent(this.state.outRightX - posX) *
            (this.state.max - this.state.min) / 100
        }
      }));
    }
  }

  handlePointerUp = (event) => {
    this.setState((state) => ({ className: 'range-slider' }));
    this.setState((state) => ({
      slider: null,
      move: null
    }));

    // const left = parseInt(this.progress.current.style.left.match(/\d+/));
    // const right = parseInt(this.progress.current.style.right.match(/\d+/));
    // const range = this.state.max - this.state.min;
    // const from = this.state.min + left * range / 100;
    // const to = this.state.max - right * range / 100;
    // this.setState((state) => ({ selected: { from: from, to: to } }));
    // console.log(from, to, this.state.selected.from, this.state.selected.to)

    // this.element.dispatchEvent(new CustomEvent('range-selected',
    //   {
    //     bubbles: true,
    //     detail: {
    //       filterName: this.filterName,
    //       value: { from, to }
    //     }
    //   })
    // );
  };

  onDragStart = () => {
    return false;
  };

  getValueInPercent(value) {
    const sliderWidth = this.progress.current.getBoundingClientRect().width;
    return Math.floor(value * 100 / sliderWidth);
  }

  formatValue = value => value

  render() {
    const left = (this.state.selected.from - this.state.min) * 100 /
      (this.state.max - this.state.min) + '%';
    const right = (this.state.max - this.state.selected.to) * 100 /
      (this.state.max - this.state.min) + '%';
    return (
      <fieldset
        onDragStart={this.onDragStart}
        onPointerUp={this.handlePointerUp}
        onPointerMove={this.state.move}>
        <legend className="filters__group">{this.state.title}</legend>
        <div className={this.state.className} data-element="rangeSlider">
          <span data-element="from">{this.state.selected.from}</span>
          <div ref={this.progress}
            className="range-slider__inner">
            <span className="range-slider__progress"
              style={{ left: left, right: right }}></span>
            <span ref={this.thumbLeft}
              className="range-slider__thumb-left"
              style={{ left: left }}
              onPointerDown={this.handlePointerDown}>
              <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.959114 4.55246L4.65304 0.992556C4.97059 0.686527 5.5 0.911567 5.5 1.35258V16.9297C5.5 17.3481 5.01686 17.5815 4.68917 17.3214L1.06751 14.4471C0.708988 14.1625 0.5 13.7298 0.5 13.2721V5.63253C0.5 5.2251 0.66574 4.83519 0.959114 4.55246Z" fill="white" stroke="#C2CFE0" />
              </svg>
            </span>
            <span ref={this.thumbRight}
              className="range-slider__thumb-right"
              style={{ right: right }}
              onPointerDown={this.handlePointerDown}>
              <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.959114 4.55246L4.65304 0.992556C4.97059 0.686527 5.5 0.911567 5.5 1.35258V16.9297C5.5 17.3481 5.01686 17.5815 4.68917 17.3214L1.06751 14.4471C0.708988 14.1625 0.5 13.7298 0.5 13.2721V5.63253C0.5 5.2251 0.66574 4.83519 0.959114 4.55246Z" fill="white" stroke="#C2CFE0" />
              </svg>
            </span>
          </div>
          <span data-element="to">{this.state.selected.to}</span>
        </div>
      </fieldset>
    )
  }
}

export default DoubleSlider;