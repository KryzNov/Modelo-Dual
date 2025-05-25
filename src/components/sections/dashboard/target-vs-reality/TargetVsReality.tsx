import { Paper, Stack, Typography } from '@mui/material';
import TargetVsRealityChart from './TargetVsRealityChart';
import IconifyIcon from 'components/base/IconifyIcon';
import { salesData, targetVsReality } from 'data/target-vs-reality';

const TargetVsReality = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" color="primary.dark" mb={1.25}>
        Sectores económicos
      </Typography>

      <TargetVsRealityChart style={{ height: 250 }} data={targetVsReality} />
    </Paper>
  );
};

export default TargetVsReality;
