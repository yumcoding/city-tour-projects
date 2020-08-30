import React, { Component } from "react";
import "./tour.scss";

class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  handleRemove = () => {
    const { id } = this.props.tour;
    const { removeTour } = this.props;
    removeTour(id);
  };

  render() {
    const { city, img, name, info } = this.props.tour;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={name} />
          <span className="close-btn" onClick={this.handleRemove}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span>
              <i
                onClick={this.handleClick}
                className="fas fa-caret-square-down"
              />
            </span>
          </h5>
          {/* {this.state.showInfo ? <p>{info}</p> : null} */}
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

export default Tour;
