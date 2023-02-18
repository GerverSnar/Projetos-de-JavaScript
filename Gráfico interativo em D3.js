<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Gráfico Interativo em D3</title>
  <script src="https://d3js.org/d3.v6.min.js"></script>
  <style>
    .axis text {
      font-size: 12px;
      fill: #555;
    }

    .axis path,
    .axis line {
      fill: none;
      stroke: #555;
      shape-rendering: crispEdges;
    }

    .bar {
      fill: steelblue;
    }

    .bar:hover {
      fill: brown;
    }
  </style>
</head>
<body>
  <svg width="500" height="300"></svg>

  <script>
    // Dados de exemplo
    var data = [
      { name: "A", value: 10 },
      { name: "B", value: 20 },
      { name: "C", value: 30 },
      { name: "D", value: 40 },
      { name: "E", value: 50 }
    ];

    // Configuração do gráfico
    var margin = { top: 20, right: 20, bottom: 30, left: 40 };
    var width = 500 - margin.left - margin.right;
    var height = 300 - margin.top - margin.bottom;

    var x = d3.scaleBand()
      .range([0, width])
      .padding(0.1);

    var y = d3.scaleLinear()
      .range([height, 0]);

    var svg = d3.select("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(data.map(function(d) { return d.name; }));
    y.domain([0, d3.max(data, function(d) { return d.value; })]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(y).ticks(10, "%"));

    var bars = svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.value); });

    bars.on("mouseover", function() {
      d3.select(this)
        .attr("fill", "brown");
    })
    .on("mouseout", function() {
      d3.select(this)
        .attr("fill", "steelblue");
    });
  </script>
</body>
</html>
