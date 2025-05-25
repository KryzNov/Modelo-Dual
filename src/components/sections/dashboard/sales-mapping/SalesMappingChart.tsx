import { SxProps, useTheme } from '@mui/material';
import { MutableRefObject, useMemo } from 'react';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption,
} from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import EChartsReactCore from 'echarts-for-react/lib/core';
import ReactEchart from 'components/base/ReactEhart';

echarts.use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | LegendComponentOption | PieSeriesOption
>;

interface SalesMappingChartProps {
  salesMappingChartRef: MutableRefObject<EChartsReactCore | null>;
  style?: {
    height?: number;
    width?: number;
  };
  sx?: SxProps;
}

const SalesMappingChart = ({
  salesMappingChartRef,
  style,
  ...props
}: SalesMappingChartProps) => {
  const theme = useTheme();

  const pieChartOption = useMemo(() => {
    const option: EChartsOption = {
      color: [
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.info.main,
        theme.palette.warning.main
      ],

      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
      },

      legend: {
        orient: 'horizontal', // Cambiado a horizontal
        bottom: 0, // Posicionado en la parte inferior
        textStyle: {
          fontFamily: theme.typography.fontFamily,
          color: theme.palette.text.primary
        },
        data: ['Investigación', 'Privada', 'Otro', 'Pública'] // Actualizado según tu imagen
      },

      series: [{
        name: 'Tipo de Unidad Dual',
        type: 'pie',
        radius: ['40%', '70%'], // Radio interno y externo para estilo donut
        center: ['50%', '45%'], // Centrado considerando la leyenda
        data: [
          { value: 30, name: 'Investigación' },
          { value: 30, name: 'Privada' },
          { value: 10, name: 'Otro' },
          { value: 30, name: 'Pública' }
        ],
        itemStyle: {
          borderRadius: 5,
          borderColor: theme.palette.background.default,
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: '{b}: {d}%',
          color: theme.palette.text.primary
        },
        labelLine: {
          show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }],
      
      grid: {
        bottom: '20%' // Espacio para la leyenda horizontal
      }
    };
    return option;
  }, [theme]);

  return (
    <ReactEchart
      echarts={echarts}
      option={pieChartOption}
      ref={salesMappingChartRef}
      style={{ ...style, height: 400 }} // Altura fija para mejor visualización
      {...props}
    />
  );
};

export default SalesMappingChart;