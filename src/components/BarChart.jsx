import {
  Chart as ChartJS, // Import Chart component from chart.js library and rename it as ChartJS
  CategoryScale, // Import CategoryScale for categorical axis
  LinearScale, // Import LinearScale for linear axis
  BarElement, // Import BarElement for rendering bars
  Title, // Import Title for chart title
  Tooltip, // Import Tooltip for showing tooltip on hover
  Legend, // Import Legend for chart legend
} from 'chart.js'; // Import necessary components from chart.js library
import { Bar } from 'react-chartjs-2'; // Import Bar component from react-chartjs-2 library
import TitleCard from "../helper/TitleCard"; // Import TitleCard component from a helper file

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend); // Register chart elements with ChartJS

function BarChart() { // Define BarChart function component

    const options = { // Define options object for chart configuration
        responsive: true, // Enable chart responsiveness
        plugins: { // Configure plugins for the chart
          legend: { // Configure legend plugin
            position: 'top', // Set legend position to top
          }
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // Define labels for x-axis
      
      const data = { // Define data object for chart datasets
        labels, // Assign labels to chart data
        datasets: [ // Define datasets for the chart
          {
            label: 'Store 1', // Label for the first dataset
            data: labels.map(() => { return Math.random() * 1000 + 500 }), // Generate random data for the first dataset
            backgroundColor: 'rgba(255, 99, 132, 1)', // Background color for bars in the first dataset
          },
          {
            label: 'Store 2', // Label for the second dataset
            data: labels.map(() => { return Math.random() * 1000 + 500 }), // Generate random data for the second dataset
            backgroundColor: 'rgba(53, 162, 235, 1)', // Background color for bars in the second dataset
          },
        ],
      };

    return( // Return JSX to render the component
      <TitleCard title={""}> {/* Render TitleCard component with title "Revenue" */}
            <Bar options={options} data={data} /> {/* Render Bar component with specified options and data */}
      </TitleCard>

    )
}

export default BarChart; // Export BarChart function component as default export
