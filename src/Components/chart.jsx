import React from 'react';
import { Chart, registerables } from 'chart.js';
import {Bar} from 'react-chartjs-2';
Chart.register(...registerables);

const state = {
  labels: ['Facebook', 'Linkedin', 'Twitter',
            'Instagram',
           'TikTok', 'Title7',],
  datasets: [
    {
      label: 'Your Social Media Analatics',
      backgroundColor: '#373DEB',
      borderColor: '#0091E3',
      borderWidth: 2,
      data: [65, 70, 60, 81, 56,32,45]
    }
  ]
}

export default class PhaseChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Analatics',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}