interface ProductPerformanceData {
  id: number;
  assigned: {
    name: string;
    role: string;
  };
  name: string;
  priority: string;
  budget: string;
}

export const rows: ProductPerformanceData[] = [
  {
    id: 1,
    assigned: {
      name: 'María González',
      role: 'Instituto Tecnológico de Aguascalientes',
    },
    name: 'BioTerra',
    priority: 'Agroindustrial',
    budget: 'Semestral',
  },
  {
    id: 2,
    assigned: {
      name: 'Carlos Martínez',
      role: 'UANL',
    },
    name: 'SmartForest',
    priority: 'Silvicultura',
    budget: 'Anual',
  },
  {
    id: 3,
    assigned: {
      name: 'Ana López',
      role: 'UV',
    },
    name: 'AcuaSustentable',
    priority: 'Pesca y Acuacultura',
    budget: 'Mensual',
  },
  {
    id: 4,
    assigned: {
      name: 'Jorge Rodríguez',
      role: 'IPN',
    },
    name: 'MinEco',
    priority: 'Minería',
    budget: 'Bimestral',
  },
  {
    id: 5,
    assigned: {
      name: 'Laura Sánchez',
      role: 'UDG',
    },
    name: 'NutriSafe',
    priority: 'Alimentos, Bebidas y Tabaco',
    budget: 'Trimestral',
  },
  {
    id: 6,
    assigned: {
      name: 'Sofía Hernández',
      role: 'BUAP',
    },
    name: 'TexCycle',
    priority: 'Textiles, Vestido y Cuero',
    budget: 'Semestral',
  },
  {
    id: 7,
    assigned: {
      name: 'Diego Ramírez',
      role: 'UAEMex',
    },
    name: 'EcoBuild',
    priority: 'Construcción',
    budget: 'Anual',
  },
  {
    id: 8,
    assigned: {
      name: 'Ricardo Torres',
      role: 'UMSNH',
    },
    name: 'GreenEnergy',
    priority: 'Electricidad, Gas y Agua',
    budget: 'Mensual',
  },
  {
    id: 9,
    assigned: {
      name: 'Patricia Morales',
      role: 'UADY',
    },
    name: 'EduTech',
    priority: 'Educación',
    budget: 'Bimestral',
  },
  {
    id: 10,
    assigned: {
      name: 'Fernando Castro',
      role: 'UAM',
    },
    name: 'DataMex',
    priority: 'Tecnologías de la Información y Comunicaciones',
    budget: 'Trimestral',
  },
];
