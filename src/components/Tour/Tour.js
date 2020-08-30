import React, { Component } from "react";

class Tour extends Component {
  render() {
    const { city, img, name, info } = this.props.tour;
    return (
      <div>
        <h1>{city}</h1>
        <img src={img} alt={city} />
        <h3>{name}</h3>
        <p>{info}</p>
      </div>
    );
  }
}

export default Tour;
