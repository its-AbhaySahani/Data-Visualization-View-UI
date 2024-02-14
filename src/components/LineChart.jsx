import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TitleCard from "../helper/TitleCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function LineChart(){

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure responsiveness
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 10 // Reduce legend font size
          }
        }
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 8 // Reduce x-axis label font size
          }
        }
      },
      y: {
        ticks: {
          font: {
            size: 8 // Reduce y-axis label font size
          }
        }
      }
    }
  };

  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'MAU',
      data: labels.map(() => { return Math.random() * 100 + 500 }),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  

    return(
      <TitleCard title={"Montly Active Users (in K)"} style={{width: '300px', height: '200px'}}>
          <Line data={data} options={options}/>
      </TitleCard>
    )
}

export default LineChart;
