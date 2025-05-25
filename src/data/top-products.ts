export interface Product {
  id: number;
  name: string;
  color: string;
  sales: number;
}

export const topProducts: Product[] = [
  { id: 1, name: 'Semestral', color: 'info.main', sales: 45 },
  { id: 2, name: 'Cuatrimestral', color: 'success.main', sales: 29 },
  { id: 3, name: 'Otro', color: 'secondary.dark', sales: 18 },
];
