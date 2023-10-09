import { Bar } from 'react-chartjs-2';

import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Stats = ({ stats }) => {

    const labels = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed']
    const stats_data = stats ? stats.map(stat => stat.base_stat) : [0,0,0,0,0,0]

    const data = {
        labels: labels,
        datasets: [{
            label: 'Base-stat',
            data: stats_data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    }

    const options = {
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    color: 'black', // Set the color of x-axis labels to black
                },
                grid: {
                    display: false, // Hide the grid on the x-axis}
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false, // Hide the grid on the y-axis
                },
                ticks: {
                    display: false, // Hide the ticks on the y-axis
                },

            },
        },
    };

    return (stats ?  
    (<div className="stats">
        <Bar data={data} options={options} />
    </div>) : (null)
  )
}

export default Stats