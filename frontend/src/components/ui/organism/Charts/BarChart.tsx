
import { BarChart as Chart } from '@mui/x-charts/BarChart';
import {theme} from "../../../theme"

export default function BarChart({}) {
    const uData = [4000, 3000, 2000, ];
    const pData = [2400, 1398, 900, ];
    const xLabels = [
      'Page A',
      'Page B',
      'Page C',
      
    ];
  return (
    <Chart
      width={500}
      height={370}
      series={[
        { data: pData, label: 'pv', id: 'pvId', color:theme.palette.secondary.main},
        { data: uData, label: 'uv', id: 'uvId', color:theme.palette.primary.dark },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
