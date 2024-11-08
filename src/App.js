import './App.css';
import Bank from './components/Bank/Bank';
import Budget from './components/Budget/Budget';
import { BarChart, PieChart } from '@mui/x-charts';

function App() {
  return (
    <div className="App">
      <Bank />
      <Budget />

      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: ['food', 'electricity', 'hobby'],
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: [5000, 10000, 3000],
          },
        ]}
        width={500}
        height={300}
      />

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 5000, label: 'food' },
              { id: 1, value: 1000, label: 'hobby' },
              { id: 2, value: 4000, label: 'rent' },
              { id: 3, value: 5000, label: 'electricity' },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
}

export default App;
