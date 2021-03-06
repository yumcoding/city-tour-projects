import React, { Component } from "react";
import Tour from "../Tour";
import { tourData } from "../../tourData";
import "./tourlist.scss";

class index extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const { tours } = this.state;
    this.setState({ tours: tours.filter((tour) => tour.id !== id) });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}

export default index;
