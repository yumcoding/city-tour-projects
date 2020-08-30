import React, { Component } from "react";
import "./tour.scss";

class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleInfoToggle = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  // handleRemove = () => {
  //   const { id } = this.props.tour;
  //   const { removeTour } = this.props;
  //   removeTour(id);
  // };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={name} />
          <span
            className="close-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
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
                onClick={this.handleInfoToggle}
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
