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
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoHeader from 'layouts/main-layout/sidebar/LogoHeader';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Form = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: {
      nombre: '',
      direccion: '',
      sexo: '',
      matricula: '',
      carrera: '',
      otraCarrera: '',
      tipoInstitucion: '',
      institucion: '',
      otraInstitucion: '',
    },
    periodo: {
      duracion: '',
      otraDuracion: '',
    },
    unidadDual: {
      nombre: '',
      tipo: '',
      otroTipo: '',
      sector: '',
      otroSector: '',
      tamano: '',
      afiliacion: '',
      otraAfiliacion: '',
      domicilio: '',
      areaProyecto: '',
      otraAreaProyecto: '',
      fechaInicio: null,
      fechaTermino: null,
      estadoConvenio: '',
      otroEstadoConvenio: '',
      apoyoEconomico: '',
      cantidadApoyo: ''
    }
  });

  const [modeloDual, setModeloDual] = useState('');

  const steps = ['Información Personal', 'Datos Académicos', 'Datos de Unidad Dual'];

  // Opciones para selects
  const instituciones = [
    'Tecnológico Nacional de México',
    'Universidad Politécnica',
    'Universidad Tecnológica',
    'Universidad Autónoma',
    'Universidad Rosario Castellanos',
    'Instituto Politécnico Nacional',
    'Centro de Investigación',
    'Universidad Privada'
  ];

  const duracionesPeriodo = [
    { value: 'cuatrimestral', label: 'Cuatrimestral' },
    { value: 'semestral', label: 'Semestral' }
  ];

  const carreras = [
    { value: 'ingenieria', label: 'Ingeniería' },
    { value: 'administracion', label: 'Administración' },
    { value: 'contabilidad', label: 'Contabilidad' }
  ];

  const tiposUnidadDual = [
    { value: 'empresa_publica', label: 'a) Empresa Pública' },
    { value: 'empresa_privada', label: 'b) Empresa Privada' },
    { value: 'dependencia_gobierno', label: 'c) Dependencia de Gobierno' },
    { value: 'centro_investigacion', label: 'd) Centro de Investigación' },
    { value: 'asociacion', label: 'e) Asociación' },
    { value: 'fundacion', label: 'f) Fundación' }
  ];

  const sectoresUnidadDual = [
    { value: 'agroindustrial', label: 'a) Agroindustrial' },
    { value: 'silvicultura', label: 'b) Silvicultura' },
    { value: 'pesca_acuacultura', label: 'c) Pesca y Acuacultura' },
    { value: 'mineria', label: 'd) Minería' },
    { value: 'alimentos', label: 'e) Alimentos, Bebidas y Tabaco' },
    { value: 'textiles', label: 'f) Textiles, Vestido y Cuero' },
    { value: 'madera', label: 'g) Madera y sus Productos' },
    { value: 'papel', label: 'h) Papel, Imprenta y Editoriales' },
    { value: 'quimica', label: 'i) Química' },
    { value: 'plastico', label: 'j) Plástico y Caucho' },
    { value: 'minerales', label: 'k) Minerales no Metálicos' },
    { value: 'industrias_metalicas', label: 'l) Industrias Metálicas Básicas' },
    { value: 'productos_metalicos', label: 'm) Productos Metálicos, Maquinaria y Equipos' },
    { value: 'construccion', label: 'n) Construcción' },
    { value: 'electricidad', label: 'o) Electricidad, Gas y Agua' },
    { value: 'comercio', label: 'p) Comercio y Turismo' },
    { value: 'transporte', label: 'q) Transporte, Almacenaje y Comunicaciones' },
    { value: 'servicios_financieros', label: 'r) Servicios Financieros, Seguros, Actividades inmobiliarias y de Alquiler' },
    { value: 'educacion', label: 's) Educación' },
    { value: 'tic', label: 't) Tecnologías de la Información y Comunicaciones' },
    { value: 'investigacion', label: 'v) Investigación e Innovación' },
    { value: 'desarrollo_social', label: 'w) Desarrollo Social' }
  ];

  const tamanosUnidadDual = [
    { value: 'micro', label: 'a) Micro (1 a 10 trabajadores)' },
    { value: 'pequena', label: 'b) Pequeña (11 a 50 trabajadores)' },
    { value: 'mediana', label: 'c) Mediana (51 a 100 trabajadores)' },
    { value: 'grande', label: 'd) Grande (Más de 100 trabajadores)' }
  ];

  const afiliacionesUnidadDual = [
    { value: 'cce', label: 'a) Consejo Coordinador Empresarial (CCE)' },
    { value: 'coi', label: 'b) Confederación de Cámaras Industriales de los Estados Unidos Mexicanos (COI)' },
    { value: 'se', label: 'c) Confederación de Cámaras Nacionales de Comercio, Servicios y Turismo (SE)' },
    { value: 'coparmex', label: 'd) Confederación Patronal de la República Mexicana (COPARMEX)' },
    { value: 'cmn', label: 'f) Consejo Mexicano de Negocios (CMN)' },
    { value: 'cna', label: 'g) Consejo Nacional Agropecuario (CNA)' },
    { value: 'abm', label: 'h) Asociación de Bancos de México (ABM)' }
  ];

  const areasProyectoDual = [
    { value: 'desarrollo_software', label: 'a) Desarrollo de Software' },
    { value: 'desarrollo_maquinaria', label: 'b) Desarrollo de Maquinaria y Equipo' },
    { value: 'desarrollo_producto', label: 'c) Desarrollo de producto' },
    { value: 'mejora_procesos', label: 'd) Mejora de Procesos' },
    { value: 'planeacion_urbana', label: 'e) Planeación Urbana' },
    { value: 'politicas_publicas', label: 'f) Políticas Públicas' },
    { value: 'programas_desarrollo', label: 'g) Programas de desarrollo regional y nacional' },
    { value: 'impacto_comunitario', label: 'h) Proyectos de impacto comunitario' },
    { value: 'inclusion_social', label: 'i) Inclusión Social' },
    { value: 'tratamiento_aguas', label: 'j) Tratamiento de Aguas' },
    { value: 'conservacion_medio_ambiente', label: 'k) Conservación del Medio Ambiente' },
    { value: 'programas_salud', label: 'l) Programas de salud' },
    { value: 'equidad_genero', label: 'm) Programas de Equidad de Género' },
    { value: 'creacion_empresas', label: 'n) Creación de nuevas empresas' },
    { value: 'automatizacion_procesos', label: 'o) Automatización de procesos' },
    { value: 'energia_renovable', label: 'p) Energía Renovable' },
    { value: 'plan_mantenimiento', label: 'q) Elaboración e Implementación de Plan de Mantenimiento' },
    { value: 'seguridad_higiene', label: 'r) Seguridad e Higiene' }
  ];

  const estadosConvenio = [
    { value: 'firmado', label: 'Convenio Dual firmado' },
    { value: 'tramite', label: 'Convenio Dual en trámite' }
  ];

  const handleNext = () => {
    if (activeStep === 0 && modeloDual === 'no') {
      handleSubmit();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (section, field) => (event) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: event.target.value
      }
    });
  };

  const handleDateChange = (field) => (newValue) => {
    setFormData({
      ...formData,
      unidadDual: {
        ...formData.unidadDual,
        [field]: newValue
      }
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    console.log('Formulario enviado:', { ...formData, modeloDual });
    navigate('/exito');
  };

  const renderSelectField = (section, field, label, options, showOther = true) => (
    <Box>
      <Typography variant="body1" sx={{ mb: 1.5 }}>
        {label}
      </Typography>
      <TextField
        select
        value={formData[section][field] || ''}
        onChange={handleChange(section, field)}
        fullWidth
        SelectProps={{ native: true }}
      >
        <option value="">Seleccione una opción</option>
        {options.map((option) => (
          typeof option === 'string' 
            ? <option key={option} value={option}>{option}</option>
            : <option key={option.value} value={option.value}>{option.label}</option>
        ))}
        {showOther && <option value="otro">Otro</option>}
      </TextField>
      {formData[section][field] === 'otro' && showOther && (
        <Box mt={2}>
          <TextField
            label={`Especifique ${label.toLowerCase()}`}
            value={formData[section][`otra${field.charAt(0).toUpperCase() + field.slice(1)}`] || ''}
            onChange={handleChange(section, `otra${field.charAt(0).toUpperCase() + field.slice(1)}`)}
            fullWidth
          />
        </Box>
      )}
    </Box>
  );

  const renderRadioField = (section, field, label, options) => (
    <Box>
      <Typography variant="body1" sx={{ mb: 1.5 }}>
        {label}
      </Typography>
      <RadioGroup
        row
        value={formData[section][field] || ''}
        onChange={handleChange(section, field)}
      >
        {options.map((option) => (
          <FormControlLabel 
            key={option.value} 
            value={option.value} 
            control={<Radio />} 
            label={option.label} 
          />
        ))}
      </RadioGroup>
      {formData[section][field] === 'si' && field === 'apoyoEconomico' && (
        <Box mt={2}>
          <TextField
            label="Cantidad de apoyo económico"
            type="number"
            value={formData.unidadDual.cantidadApoyo}
            onChange={handleChange('unidadDual', 'cantidadApoyo')}
            fullWidth
            InputProps={{
              startAdornment: <Typography>$</Typography>
            }}
          />
        </Box>
      )}
    </Box>
  );

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={4}>
            <Box>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Nombre de la IES
              </Typography>
              <TextField
                label="Ej. Instituto Tecnológico de Aguascalientes"
                value={formData.personal.nombre}
                onChange={handleChange('personal', 'nombre')}
                fullWidth
                required
              />
            </Box>

            <Box>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Tipo de institución
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant={formData.personal.tipoInstitucion === 'Publica' ? 'contained' : 'outlined'}
                  onClick={() => handleChange('personal', 'tipoInstitucion')({ target: { value: 'Publica' } })}
                >
                  Pública
                </Button>
                <Button
                  variant={formData.personal.tipoInstitucion === 'Privada' ? 'contained' : 'outlined'}
                  onClick={() => handleChange('personal', 'tipoInstitucion')({ target: { value: 'Privada' } })}
                >
                  Privada
                </Button>
              </Stack>
            </Box>

            {renderSelectField('personal', 'institucion', 'Subsistema de la IES', instituciones)}

            <Box>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Dirección
              </Typography>
              <TextField
                label="Ej. Av. Hidalgo 742"
                value={formData.personal.direccion}
                onChange={handleChange('personal', 'direccion')}
                fullWidth
              />
            </Box>

            <Box>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                ¿En este seguimiento tiene información del Modelo Dual que reportar?
              </Typography>
              <RadioGroup
                row
                value={modeloDual}
                onChange={(e) => setModeloDual(e.target.value)}
              >
                <FormControlLabel value="si" control={<Radio />} label="Sí" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Stack>
        );

      case 1:
        return (
          <Stack spacing={4}>
            <Box>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Sexo
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant={formData.personal.sexo === 'Hombre' ? 'contained' : 'outlined'}
                  onClick={() => handleChange('personal', 'sexo')({ target: { value: 'Hombre' } })}
                >
                  Hombre
                </Button>
                <Button
                  variant={formData.personal.sexo === 'Mujer' ? 'contained' : 'outlined'}
                  onClick={() => handleChange('personal', 'sexo')({ target: { value: 'Mujer' } })}
                >
                  Mujer
                </Button>
              </Stack>
            </Box>

            <Box>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                No. de Control o Matrícula
              </Typography>
              <TextField
                label="Ej. 12345678"
                value={formData.personal.matricula}
                onChange={handleChange('personal', 'matricula')}
                fullWidth
                required
              />
            </Box>

            {renderSelectField('periodo', 'duracion', 'Duración del periodo', duracionesPeriodo)}

            {renderSelectField('personal', 'carrera', 'Carrera', carreras)}
          </Stack>
        );

      case 2:
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={4}>
              {modeloDual === 'si' ? (
                <>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Datos de la Unidad Dual
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body1" sx={{ mb: 1.5 }}>
                      Nombre de la Unidad Dual
                    </Typography>
                    <TextField
                      label="Ej. Empresa Ejemplo S.A. de C.V."
                      value={formData.unidadDual.nombre}
                      onChange={handleChange('unidadDual', 'nombre')}
                      fullWidth
                      required
                    />
                  </Box>

                  {renderSelectField('unidadDual', 'tipo', 'Tipo de Unidad Dual', tiposUnidadDual)}

                  {renderSelectField('unidadDual', 'sector', 'Sector de la Unidad Dual', sectoresUnidadDual)}

                  {renderSelectField('unidadDual', 'tamano', 'Tamaño de la Unidad Dual', tamanosUnidadDual, false)}

                  {renderSelectField('unidadDual', 'afiliacion', 'Cámara, Asociación, Grupo o Clúster al que está afiliada la Unidad', afiliacionesUnidadDual)}

                  <Box>
                    <Typography variant="body1" sx={{ mb: 1.5 }}>
                      Domicilio de la Unidad Dual
                    </Typography>
                    <TextField
                      label="Ej. Calle Principal #123, Colonia Centro"
                      value={formData.unidadDual.domicilio}
                      onChange={handleChange('unidadDual', 'domicilio')}
                      fullWidth
                    />
                  </Box>

                  {renderSelectField('unidadDual', 'areaProyecto', 'Área del Proyecto Dual', areasProyectoDual)}

                  <Box>
                    <Typography variant="body1" sx={{ mb: 1.5 }}>
                      Periodo del Proyecto Dual
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <DatePicker
                        label="Fecha de inicio"
                        value={formData.unidadDual.fechaInicio}
                        onChange={handleDateChange('fechaInicio')}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                      />
                      <DatePicker
                        label="Fecha de terminación"
                        value={formData.unidadDual.fechaTermino}
                        onChange={handleDateChange('fechaTermino')}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                      />
                    </Stack>
                  </Box>

                  {renderSelectField('unidadDual', 'estadoConvenio', 'Estado que guarda el Convenio Dual', estadosConvenio)}

                  {renderRadioField('unidadDual', 'apoyoEconomico', '¿El estudiante está recibiendo un apoyo económico?', [
                    { value: 'si', label: 'Sí' },
                    { value: 'no', label: 'No' }
                  ])}
                </>
              ) : (
                <Box>
                  <Typography variant="body1" sx={{ mb: 1.5 }}>
                    No se requieren datos de Unidad Dual para este seguimiento
                  </Typography>
                </Box>
              )}
            </Stack>
          </LocalizationProvider>
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

            {activeStep === steps.length - 1 || (activeStep === 0 && modeloDual === 'no') ? (
              <Button type="submit" variant="contained">
                Enviar
              </Button>
            ) : (
              <Button 
                variant="contained" 
                onClick={handleNext} 
                disabled={activeStep === 0 && !modeloDual}
              >
                Siguiente
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Form;