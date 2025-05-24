import { useTheme } from '@mui/material';
import { MutableRefObject, useMemo } from 'react';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
} from 'echarts/components';
import { 
    PieChart,
    BarChart,
    PieSeriesOption,
    BarSeriesOption,
} from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import EChartsReactCore from 'echarts-for-react/lib/core';
import ReactEchart from 'components/base/ReactEhart';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  PieChart,
  BarChart,
  CanvasRenderer,
]);

type EChartsOption = echarts.ComposeOption<
  | TooltipComponent
  | GridComponent
  | LegendComponent
  | PieSeriesOption
  | BarSeriesOption
>;

interface VisitorInsightsChartProps {
  chartRef: MutableRefObject<EChartsReactCore | null>;
  data: { [label: string]: number }; // Simplificado para pie/bar charts
  style?: { height: number; width?: number };
  title?: string;
  type?: 'pie' | 'bar';
}

const VisitorInsightsChart = ({
  chartRef,
  data,
  style,
  title,
  type = 'pie',
}: VisitorInsightsChartProps) => {
  const theme = useTheme();

  const chartOption = useMemo(() => {
    const categories = Object.keys(data);
    const values = Object.values(data);

    const option: EChartsOption = {
      title: {
        text: title || '',
        left: 'center',
        textStyle: {
          color: theme.palette.text.primary,
        },
      },
      tooltip: {
        trigger: type === 'pie' ? 'item' : 'axis',
      },
      legend: {
        top: 'bottom',
        textStyle: {
          color: theme.palette.text.secondary,
        },
      },
      ...(type === 'pie'
        ? {
            series: [
              {
                name: 'Distribución',
                type: 'pie',
                radius: '50%',
                data: categories.map((label) => ({
                  name: label,
                  value: data[label],
                })),
                label: {
                  color: theme.palette.text.primary,
                },
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: theme.palette.grey[800],
                  },
                },
              },
            ],
          }
        : {
            xAxis: {
              type: 'category',
              data: categories,
              axisLabel: {
                color: theme.palette.text.secondary,
              },
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                color: theme.palette.text.secondary,
              },
            },
            series: [
              {
                type: 'bar',
                data: values,
                itemStyle: {
                  color: theme.palette.primary.main,
                },
              },
            ],
          }),
    };

    return option;
  }, [data, type, theme, title]);

  return (<ReactEchart echarts={echarts} option={chartOption} ref={chartRef} style={style} />);
};

export default VisitorInsightsChart;
