import { useRef } from 'react';
import { Paper, Typography } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import SalesMappingChart from './SalesMappingChart';

const SalesMapping = () => {
  const salesMappingChartRef = useRef<null | EChartsReactCore>(null);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" color="primary.dark" mb={1.375}>
        Tipo de Unidad Dual
      </Typography>

      <SalesMappingChart
        salesMappingChartRef={salesMappingChartRef}
        style={{ height: 400 }} // Aumenté la altura para mejor visualización
        sx={{ px: 3 }}
      />
    </Paper>
  );
};

export default SalesMapping;
