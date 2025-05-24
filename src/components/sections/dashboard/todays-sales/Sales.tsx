import { Typography, Grid, Paper, Stack, Button } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { sales } from 'data/sales';
import SaleCard from './SaleCard';

const Sales = () => {
  return (
    <Paper sx={{ pt: 2.875, pb: 4, px: 4 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={5.375}>
        <div>
          <Typography variant="h4" mb={0.5}>
            Resumen
          </Typography>
        </div>
        <Button variant="outlined" startIcon={<IconifyIcon icon="solar:upload-linear" />}>
          Exportar
        </Button>
      </Stack>

      <Grid
        container
        spacing={2}
        columns={3}
        justifyContent="center"
        alignItems="center"
      >
        {sales.map((item) => (
          <Grid item xs={1} key={item.label}>
            <SaleCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Sales;
