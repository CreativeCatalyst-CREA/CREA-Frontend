'use client';

import {useMemo, useRef} from 'react';
import * as d3 from 'd3';
import './index.css';

type DataItem = {
  name: string;
  value: number;
};
type DonutChartProps = {
  width: number;
  height: number;
  data: DataItem[];
};

const MARGIN_X = 300;
const MARGIN_Y = 50;
const INFLEXION_PADDING = 50; // space between donut and label inflexion point

const colors = ['#6740CC', '#B024FF', '#DA5CDA', '#603468', '#9600CB'];

export const DonutChart = ({width, height, data}: DonutChartProps) => {
  const ref = useRef<SVGGElement>(null);

  const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;
  const innerRadius = radius / 2;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie<any, DataItem>().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcGenerator = d3.arc();

  const shapes = pie.map((grp, i) => {
    // First arc is for the donut
    const sliceInfo = {
      innerRadius,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const centroid = arcGenerator.centroid(sliceInfo);
    const slicePath = arcGenerator(sliceInfo);

    // Second arc is for the legend inflexion point
    const inflexionInfo = {
      innerRadius: radius + INFLEXION_PADDING,
      outerRadius: radius + INFLEXION_PADDING,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const inflexionPoint = arcGenerator.centroid(inflexionInfo);

    const isRightLabel = inflexionPoint[0] > 0;
    const labelPosX = inflexionPoint[0] + 10 * (isRightLabel ? 1 : -1);
    const textAnchor = isRightLabel ? 'start' : 'end';
    const label = grp.data.name;

    return (
      <g
        key={i}
        className="slice"
        onMouseEnter={() => {
          if (ref.current) {
            ref.current.classList.add('hasHighlight');
          }
        }}
        onMouseLeave={() => {
          if (ref.current) {
            ref.current.classList.remove('hasHighlight');
          }
        }}
      >
        {/* @ts-ignore */}
        <path d={slicePath} fill={colors[i]} />
        <text x={centroid[0] + (isRightLabel ? -10 : 10)} y={centroid[1]} textAnchor={textAnchor} dominantBaseline="middle" className="fill-white text-xl font-bold">
          {grp.value} %
        </text>
        <line x1={centroid[0]} y1={centroid[1]} x2={inflexionPoint[0]} y2={inflexionPoint[1]} className="fill-white/50 stroke-white/50" />
        <line x1={inflexionPoint[0]} y1={inflexionPoint[1]} x2={labelPosX} y2={inflexionPoint[1]} className="fill-white/50 stroke-white/50" />
        <text x={labelPosX + (isRightLabel ? 2 : -2)} y={inflexionPoint[1]} textAnchor={textAnchor} dominantBaseline="middle" className="fill-white text-3xl">
          {label}
        </text>
      </g>
    );
  });

  return (
    <svg width={width} height={height} className="mx-auto">
      <g transform={`translate(${width / 2}, ${height / 2})`} className="donut-chart-container" ref={ref}>
        {shapes}
        <text x="0%" y="0%" textAnchor="middle" dy=".3em" className="fill-white text-6xl font-bold">
          1B
        </text>
      </g>
    </svg>
  );
};
