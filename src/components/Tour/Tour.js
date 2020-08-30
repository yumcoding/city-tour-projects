import React, { Component } from "react";
import "./tour.scss";

class Tour extends Component {
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={name} />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}

export default Tour;
