import { Paper, Stack } from '@mui/material';
import { useRef } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import VisitorInsightsChart from './VisitorInsightsChart';

const VisitorInsights = () => {
  const chartRef1 = useRef<EChartsReactCore | null>(null);

  // Datos ficticios ejemplo
  const financingData = {
    Pública: 700,
    Privada: 300,
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={4}>
        <VisitorInsightsChart
          chartRef={chartRef1}
          type="pie"
          title="Distribución por Tipo de Financiamiento"
          data={financingData}
          style={{ height: 300 }}
        />
      </Stack>
    </Paper>
  );
};

export default VisitorInsights;
