import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoHeader from 'layouts/main-layout/sidebar/LogoHeader';

const GenericForm = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: { nombre: '', email: '', telefono: '' },
    direccion: { calle: '', ciudad: '', codigoPostal: '' },
    profesional: { ocupacion: '', empresa: '', experiencia: '' }
  });

  const steps = ['Información Personal', 'Dirección', 'Información Profesional'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (step, field) => (event) => {
    setFormData({
      ...formData,
      [step]: {
        ...formData[step],
        [field]: event.target.value
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica para enviar los datos
    navigate('/exito'); // Redirigir tras enviar
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={3}>
            <TextField
              label="Nombre completo"
              value={formData.personal.nombre}
              onChange={handleChange('personal', 'nombre')}
              fullWidth
              required
            />
            <TextField
              label="Correo electrónico"
              type="email"
              value={formData.personal.email}
              onChange={handleChange('personal', 'email')}
              fullWidth
              required
            />
            <TextField
              label="Teléfono"
              type="tel"
              value={formData.personal.telefono}
              onChange={handleChange('personal', 'telefono')}
              fullWidth
            />
          </Stack>
        );
      case 1:
        return (
          <Stack spacing={3}>
            <TextField
              label="Calle y número"
              value={formData.direccion.calle}
              onChange={handleChange('direccion', 'calle')}
              fullWidth
              required
            />
            <TextField
              label="Ciudad"
              value={formData.direccion.ciudad}
              onChange={handleChange('direccion', 'ciudad')}
              fullWidth
              required
            />
            <TextField
              label="Código Postal"
              value={formData.direccion.codigoPostal}
              onChange={handleChange('direccion', 'codigoPostal')}
              fullWidth
              required
            />
          </Stack>
        );
      case 2:
        return (
          <Stack spacing={3}>
            <TextField
              label="Ocupación"
              value={formData.profesional.ocupacion}
              onChange={handleChange('profesional', 'ocupacion')}
              fullWidth
              required
            />
            <TextField
              label="Empresa"
              value={formData.profesional.empresa}
              onChange={handleChange('profesional', 'empresa')}
              fullWidth
            />
            <TextField
              label="Años de experiencia"
              type="number"
              value={formData.profesional.experiencia}
              onChange={handleChange('profesional', 'experiencia')}
              fullWidth
            />
          </Stack>
        );
      default:
        return 'Paso desconocido';
    }
  };

  return (
    <Container maxWidth={false} sx={{ py: 4, px: 0 }} disableGutters>
      <Paper sx={{ p: 4, mx: 'auto', maxWidth: 'lg' }}>
        <LogoHeader sx={{ justifyContent: 'center', mb: 5 }} />
        
        <Typography variant="h4" align="center" gutterBottom>
          Formulario Multi-Sección
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box component="form" onSubmit={handleSubmit}>
          {getStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              variant="outlined"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Anterior
            </Button>

            {activeStep === steps.length - 1 ? (
              <Button type="submit" variant="contained">
                Enviar
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                Siguiente
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default GenericForm;