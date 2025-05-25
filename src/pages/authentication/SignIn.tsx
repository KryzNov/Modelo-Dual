import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoHeader from 'layouts/main-layout/sidebar/LogoHeader';
import PasswordTextField from 'components/common/PasswordTextField';

const checkBoxLabel = { inputProps: { 'aria-label': 'Checkbox' } };

const SignIn = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    navigate(rootPaths.root);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <LogoHeader sx={{ justifyContent: 'center', mb: 5 }} />
      <Typography variant="h3" align="center" gutterBottom>
        Sistema de Indicadores de Educación Dual
      </Typography>
      <Paper sx={{ p: 5 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ sm: 'center' }}
          justifyContent="center"
          spacing={1}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Iniciar Sesión
          </Typography>
        </Stack>

        <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              id="email"
              name="email"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              autoComplete="email"
              fullWidth
              required
            />

            <PasswordTextField
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
              fullWidth
              required
            />
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ sm: 'center' }}
            justifyContent="space-between"
            mt={1}
            spacing={0.5}
          >
            <FormControlLabel
              control={<Checkbox {...checkBoxLabel} color="primary" />}
              label={<Typography variant="subtitle1">Recordarme</Typography>}
            />

            <Typography variant="subtitle2" color="primary">
              <Link href="#!" underline="hover">
                Olvidé mi contraseña
              </Link>
            </Typography>
          </Stack>

          <Button type="submit" size="large" variant="contained" sx={{ mt: 2 }} fullWidth>
            Iniciar Sesión
          </Button>

          {/*<Divider sx={{ color: 'neutral.main', my: 2 }}>
            <Typography variant="subtitle2"> or sign in with</Typography>
          </Divider>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<IconifyIcon icon="devicon:google" />}
                sx={{ color: 'error.main', borderColor: 'error.main' }}
                fullWidth
              >
                <Typography>Google</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<IconifyIcon icon="logos:facebook" />}
                sx={{ color: 'primary.light', borderColor: 'primary.light' }}
                fullWidth
              >
                <Typography>Facebook</Typography>
              </Button>
            </Grid>
          </Grid>*/}
        </Box>
      </Paper>
    </Container>
  );
};

export default SignIn;
