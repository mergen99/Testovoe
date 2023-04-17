import React from "react";
import { Chart as ChartJs } from 'chart.js/auto'
import { Bar } from "react-chartjs-2";

let dataGraphic = require('../..//CommissNewWells_BarChart.json');
let years = [];
let wells = [];
dataGraphic.forEach(item => {
  years.push(item.year);
  wells.push(item.value);
});

let dataBarChart = require("../../BarChartFond.json");
let years2 = [];
let wells2 = [];
dataBarChart.forEach(item => {
  years2.push(item.year);
  wells2.push(item.value);
});

export const Chart = ({ active }) => {

  const barChartData = {
    labels: active === 'Всего' ? years : years2,
    datasets: [
      {
        data: active === 'Всего' ? wells : wells2,
        borderColor: 'green',
        backgroundColor: "orange",
        fill: true,

      }
    ]
  };

  const barChart = (
    <Bar
      type="bar"
      width={120}
      height={50}
      options={{
        title: {
          display: false,
          fontSize: 15
        },
        legend: {
          display: false, //Is the legend shown?
          position: "top" //Position of the legend.
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }}
      data={barChartData}
    />
  );
  return barChart;
}