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

    console.log(stats)

    return (
    <div className="stats">
        <Bar data={{
            labels: stats.map(stat => stat.stat.name),
            datasets: [{
                label: 'Pokemon Stats',
                data: stats.map(stat => stat.base_stat),
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
        }} />
        {/* <ul className="stats-list">
            <li>HP</li>
            <li>Attack</li>
            <li>Defense</li>
            <li>Special Attack</li>
            <li>Special Defense</li>
            <li>Speed</li>
        </ul> */}
    </div>
  )
}

export default Stats