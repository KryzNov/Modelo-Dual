import { Link, Stack, SxProps, Typography } from '@mui/material';
import { rootPaths } from 'routes/paths';

interface LogoHeaderProps {
  sx?: SxProps;
}

const LogoHeader = (props: LogoHeaderProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      columnGap={3}
      component={Link}
      href={rootPaths.root}
      {...props}
    >
      <img src="public/LOGO.png" alt="Logo" style={{ width: 56, height: 56 }} />
      <Typography variant="h2" color="primary.darker">
        Modelo Dual
      </Typography>
    </Stack>
  );
};

export default LogoHeader;
