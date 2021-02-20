import React, { Component } from "react";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

class Earnings extends Component {
  render() {
    return (
      <div>
        <div className="col-xl-8 col-lg-7">
          <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
        </div>
        <Line data={data} />
      </div>
    );
  }
}

export default Earnings;
