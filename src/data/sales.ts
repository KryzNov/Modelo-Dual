import { SvgIconProps } from '@mui/material';

export interface SaleItem {
  label: string;
  value: string;
  growth: string;
  bgColor: string;
  iconBackgroundColor: string;
  icon?: string;
  svgIcon?: (props: SvgIconProps) => JSX.Element;
}

export const sales: SaleItem[] = [
  {
    label: 'Total de Estudiantes Registrados',
    value: '1000',
    growth: '',
    bgColor: 'error.lighter',
    iconBackgroundColor: '',
  },
  {
    label: 'Estudiantes - Escuela Pública',
    value: '700',
    growth: '',
    bgColor: 'warning.lighter',
    iconBackgroundColor: '',
  },
  {
    label: 'Estudiantes - Escuela Privada',
    value: '300',
    growth: '',
    bgColor: 'success.lighter',
    iconBackgroundColor: '',
  },
];
