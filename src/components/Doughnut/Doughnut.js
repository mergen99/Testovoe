import React from "react";
import { Chart as ChartJs } from "chart.js/auto";
import { Doughnut as Dough } from "react-chartjs-2";


const pieChart = require("../../RegionalStructure_PieChart.json");
const pieChartFond = require("../../PieChartFond.json");

const arrValue = [];
pieChart.forEach((item) => {
  arrValue.push(item.value);
})

const arrValueFond = [];
pieChartFond.forEach(item => {
  arrValueFond.push(item.value);
})

export const Doughnut = ({ active }) => {
  const doughnutChartData = {
    labels: [
      'Европейская часть',
      'Западная сибирь',
      'Восточная сибирь и ДВ'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: active === 'Всего' ? arrValue : arrValueFond,
      backgroundColor: [
        'purple',
        'red',
        'orange'
      ],
      hoverOffset: 4
    }]
  }
  const doughnutChart = (
    <Dough
      type="doughnut"
      width={320}
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

      }}
      data={doughnutChartData}
    />
  );
  return doughnutChart
}