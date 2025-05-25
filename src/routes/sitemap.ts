import { SvgIconProps } from '@mui/material';
import paths, { rootPaths } from './paths';
import DashboardIcon from 'components/icons/DashboardIcon';

export interface MenuItem {
  id: number;
  name: string;
  pathName: string;
  path?: string;
  active?: boolean;
  icon?: string;
  svgIcon?: (props: SvgIconProps) => JSX.Element;
  items?: MenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 1,
    name: 'Dashboard',
    path: rootPaths.root,
    pathName: 'dashboard',
    svgIcon: DashboardIcon,
    active: true,
  },
  {
    id: 9,
    name: 'Autenticación',
    pathName: 'authentication',
    icon: 'material-symbols:security-rounded',
    active: true,
    items: [
      {
        id: 10,
        name: 'Iniciar sesión',
        path: paths.signin,
        pathName: 'sign-in',
        active: true,
      },
      /*{
        id: 11,
        name: 'Sign up',
        path: paths.signup,
        pathName: 'sign-up',
        active: true,
      },*/
    ],
  },
  {
    id: 2,
    name: 'Formulario',
    path: rootPaths.formRoot,
    pathName: 'form',
    icon: 'ri:bar-chart-line',
    active: true,
  },
  /*{
    id: 5,
    name: 'Sales Report',
    path: '#!',
    pathName: 'sales-report',
    icon: 'ph:chart-line',
  },*/
  {
    id: 7,
    name: 'Configuración',
    path: '#!',
    pathName: 'settings',
    icon: 'fluent:settings-24-regular',
    active: true,
  },
  {
    id: 8,
    name: 'Cerrar sesión',
    path: '#!',
    pathName: 'sign-out',
    icon: 'humbleicons:logout',
    active: true,
  },
];

export default sitemap;
