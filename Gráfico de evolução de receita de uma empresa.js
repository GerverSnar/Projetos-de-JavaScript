import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

function RevenueChart() {
  const [data, setData] = useState([ // dados de exemplo
    { date: new Date('2022-01-01'), revenue: 1000 },
    { date: new Date('2022-02-01'), revenue: 1500 },
    { date: new Date('2022-03-01'), revenue: 2000 },
    { date: new Date('2022-04-01'), revenue: 2500 },
    { date: new Date('2022-05-01'), revenue: 3000 },
  ]);

  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.revenue)])
      .range([height, 0]);

    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.revenue));

    svg.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));
  }, [data]);

  return (
    <svg ref={svgRef}></svg>
  );
}

export default RevenueChart;